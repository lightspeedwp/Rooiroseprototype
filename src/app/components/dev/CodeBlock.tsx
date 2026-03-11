import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Copy, Check, Pencil, Eye } from 'lucide-react';

// ─── Language type ───────────────────────────────────────────────────────────
export type CodeLanguage = 'json' | 'php' | 'css' | 'html' | 'javascript' | 'markdown' | 'text';

interface CodeBlockProps {
  /** Source code to display */
  code: string;
  /** Language for syntax highlighting */
  language: CodeLanguage;
  /** Optional label displayed above the code block */
  label?: string;
  /** Max height in pixels (default: 320) */
  maxHeight?: number;
  /** Whether the code block is editable (default: false) */
  editable?: boolean;
  /** Callback when code is edited */
  onCodeChange?: (newCode: string) => void;
  /** Whether to show line numbers (default: true) */
  showLineNumbers?: boolean;
  /** Whether to show the copy button (default: true) */
  showCopy?: boolean;
  /** Optional className for the wrapper */
  className?: string;
  /** Font size class (default: 'text-[11px]') */
  fontSize?: string;
}

// ─── Syntax highlighting tokens ─────────────────────────────────────────────

interface Token {
  text: string;
  type: 'keyword' | 'string' | 'number' | 'comment' | 'variable' | 'function'
    | 'property' | 'operator' | 'punctuation' | 'tag' | 'attribute' | 'value'
    | 'selector' | 'unit' | 'boolean' | 'null' | 'default';
}

// ─── Color classes per token type ───────────────────────────────────────────

const TOKEN_COLORS: Record<Token['type'], string> = {
  keyword:     'text-purple-400',
  string:      'text-green-400',
  number:      'text-orange-300',
  comment:     'text-gray-500 italic',
  variable:    'text-sky-300',
  function:    'text-yellow-300',
  property:    'text-sky-200',
  operator:    'text-pink-300',
  punctuation: 'text-gray-400',
  tag:         'text-red-400',
  attribute:   'text-orange-300',
  value:       'text-green-300',
  selector:    'text-amber-300',
  unit:        'text-orange-400',
  boolean:     'text-purple-300',
  null:        'text-purple-300',
  default:     'text-gray-300 dark:text-gray-300',
};

// ─── Tokenizers per language ────────────────────────────────────────────────

function tokenizeJSON(code: string): Token[][] {
  return code.split('\n').map(line => {
    const tokens: Token[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      // Whitespace
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], type: 'default' });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }

      // String key (before colon)
      const keyMatch = remaining.match(/^("(?:[^"\\]|\\.)*")\s*:/);
      if (keyMatch) {
        tokens.push({ text: keyMatch[1], type: 'property' });
        remaining = remaining.slice(keyMatch[1].length);
        continue;
      }

      // String value
      const strMatch = remaining.match(/^("(?:[^"\\]|\\.)*")/);
      if (strMatch) {
        tokens.push({ text: strMatch[1], type: 'string' });
        remaining = remaining.slice(strMatch[1].length);
        continue;
      }

      // Boolean / null
      const boolMatch = remaining.match(/^(true|false)/);
      if (boolMatch) {
        tokens.push({ text: boolMatch[1], type: 'boolean' });
        remaining = remaining.slice(boolMatch[1].length);
        continue;
      }
      const nullMatch = remaining.match(/^(null)/);
      if (nullMatch) {
        tokens.push({ text: 'null', type: 'null' });
        remaining = remaining.slice(4);
        continue;
      }

      // Numbers
      const numMatch = remaining.match(/^(-?\d+\.?\d*(?:e[+-]?\d+)?)/i);
      if (numMatch) {
        tokens.push({ text: numMatch[1], type: 'number' });
        remaining = remaining.slice(numMatch[1].length);
        continue;
      }

      // Punctuation
      const punctMatch = remaining.match(/^([{}[\]:,])/);
      if (punctMatch) {
        tokens.push({ text: punctMatch[1], type: 'punctuation' });
        remaining = remaining.slice(1);
        continue;
      }

      // Fallback: single char
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }

    return tokens;
  });
}

function tokenizePHP(code: string): Token[][] {
  const PHP_KEYWORDS = new Set([
    'function', 'return', 'if', 'else', 'elseif', 'foreach', 'for', 'while',
    'do', 'switch', 'case', 'break', 'continue', 'class', 'public', 'private',
    'protected', 'static', 'new', 'echo', 'print', 'require', 'require_once',
    'include', 'include_once', 'use', 'namespace', 'array', 'true', 'false',
    'null', 'const', 'var', 'exit', 'defined', 'isset', 'empty', 'global',
    'throw', 'try', 'catch', 'finally', 'abstract', 'interface', 'extends',
    'implements', 'as', 'list', 'match', 'fn', 'yield',
  ]);

  return code.split('\n').map(line => {
    const tokens: Token[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      // Whitespace
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], type: 'default' });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }

      // Single-line comment // or #
      if (remaining.startsWith('//') || remaining.startsWith('#')) {
        tokens.push({ text: remaining, type: 'comment' });
        remaining = '';
        continue;
      }

      // Block comment start (just highlight to end of line for simplicity)
      if (remaining.startsWith('/*') || remaining.startsWith('*') || remaining.startsWith('*/')) {
        tokens.push({ text: remaining, type: 'comment' });
        remaining = '';
        continue;
      }

      // PHP open/close tags
      const phpTag = remaining.match(/^(<\?php|<\?|\?>)/);
      if (phpTag) {
        tokens.push({ text: phpTag[1], type: 'tag' });
        remaining = remaining.slice(phpTag[1].length);
        continue;
      }

      // Variables ($name)
      const varMatch = remaining.match(/^(\$[a-zA-Z_]\w*)/);
      if (varMatch) {
        tokens.push({ text: varMatch[1], type: 'variable' });
        remaining = remaining.slice(varMatch[1].length);
        continue;
      }

      // Single-quoted string
      const sqMatch = remaining.match(/^('(?:[^'\\]|\\.)*')/);
      if (sqMatch) {
        tokens.push({ text: sqMatch[1], type: 'string' });
        remaining = remaining.slice(sqMatch[1].length);
        continue;
      }

      // Double-quoted string
      const dqMatch = remaining.match(/^("(?:[^"\\]|\\.)*")/);
      if (dqMatch) {
        tokens.push({ text: dqMatch[1], type: 'string' });
        remaining = remaining.slice(dqMatch[1].length);
        continue;
      }

      // Numbers
      const numMatch = remaining.match(/^(\d+\.?\d*)/);
      if (numMatch) {
        tokens.push({ text: numMatch[1], type: 'number' });
        remaining = remaining.slice(numMatch[1].length);
        continue;
      }

      // Function calls (word followed by parens)
      const funcMatch = remaining.match(/^([a-zA-Z_]\w*)\s*(?=\()/);
      if (funcMatch && !PHP_KEYWORDS.has(funcMatch[1])) {
        tokens.push({ text: funcMatch[1], type: 'function' });
        remaining = remaining.slice(funcMatch[1].length);
        continue;
      }

      // Keywords
      const wordMatch = remaining.match(/^([a-zA-Z_]\w*)/);
      if (wordMatch) {
        const word = wordMatch[1];
        if (PHP_KEYWORDS.has(word.toLowerCase())) {
          tokens.push({ text: word, type: 'keyword' });
        } else {
          tokens.push({ text: word, type: 'default' });
        }
        remaining = remaining.slice(word.length);
        continue;
      }

      // Operators
      const opMatch = remaining.match(/^([=!<>]=?|&&|\|\||=>|->|\.|\+\+|--|\+|-|\*|\/)/);
      if (opMatch) {
        tokens.push({ text: opMatch[1], type: 'operator' });
        remaining = remaining.slice(opMatch[1].length);
        continue;
      }

      // Punctuation
      const punctMatch = remaining.match(/^([(){}[\];:,@])/);
      if (punctMatch) {
        tokens.push({ text: punctMatch[1], type: 'punctuation' });
        remaining = remaining.slice(1);
        continue;
      }

      // Fallback
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }

    return tokens;
  });
}

function tokenizeCSS(code: string): Token[][] {
  if (!code) return [[]];
  return code.split('\n').map(line => {
    const tokens: Token[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      // Whitespace
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], type: 'default' });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }

      // Comments
      if (remaining.startsWith('/*') || remaining.startsWith('*') || remaining.startsWith('*/')) {
        tokens.push({ text: remaining, type: 'comment' });
        remaining = '';
        continue;
      }

      // Property (word followed by colon in a rule context)
      const propMatch = remaining.match(/^([a-zA-Z-]+)\s*:/);
      if (propMatch) {
        tokens.push({ text: propMatch[1], type: 'property' });
        remaining = remaining.slice(propMatch[1].length);
        continue;
      }

      // Strings
      const strMatch = remaining.match(/^(["'](?:[^"'\\]|\\.)*["'])/);
      if (strMatch) {
        tokens.push({ text: strMatch[1], type: 'string' });
        remaining = remaining.slice(strMatch[1].length);
        continue;
      }

      // Numbers with units
      const numUnitMatch = remaining.match(/^(-?\d+\.?\d*)(px|rem|em|%|vh|vw|s|ms|deg|fr|ch|ex|vmin|vmax)?/);
      if (numUnitMatch && numUnitMatch[0].length > 0) {
        tokens.push({ text: numUnitMatch[1], type: 'number' });
        if (numUnitMatch[2]) {
          tokens.push({ text: numUnitMatch[2], type: 'unit' });
        }
        remaining = remaining.slice(numUnitMatch[0].length);
        continue;
      }

      // var() function
      const varMatch = remaining.match(/^(var)\s*(\()/);
      if (varMatch) {
        tokens.push({ text: 'var', type: 'function' });
        tokens.push({ text: '(', type: 'punctuation' });
        remaining = remaining.slice(varMatch[0].length);
        continue;
      }

      // CSS function names (rgb, rgba, clamp, calc, etc.)
      const funcMatch = remaining.match(/^(rgb|rgba|hsl|hsla|clamp|calc|min|max|linear-gradient|radial-gradient|url)\s*(?=\()/);
      if (funcMatch) {
        tokens.push({ text: funcMatch[1], type: 'function' });
        remaining = remaining.slice(funcMatch[1].length);
        continue;
      }

      // Selectors (starts with . or # or @)
      const selMatch = remaining.match(/^([.#@][a-zA-Z_-][\w-]*)/);
      if (selMatch) {
        tokens.push({ text: selMatch[1], type: 'selector' });
        remaining = remaining.slice(selMatch[1].length);
        continue;
      }

      // Hex colors
      const hexMatch = remaining.match(/^(#[0-9a-fA-F]{3,8})/);
      if (hexMatch) {
        tokens.push({ text: hexMatch[1], type: 'number' });
        remaining = remaining.slice(hexMatch[1].length);
        continue;
      }

      // Punctuation
      const punctMatch = remaining.match(/^([{}();:,>~+])/);
      if (punctMatch) {
        tokens.push({ text: punctMatch[1], type: 'punctuation' });
        remaining = remaining.slice(1);
        continue;
      }

      // Keywords
      const wordMatch = remaining.match(/^([a-zA-Z_-]+)/);
      if (wordMatch) {
        const word = wordMatch[1];
        if (['important', 'none', 'inherit', 'initial', 'unset', 'auto', 'solid', 'dashed', 'dotted', 'transparent', 'block', 'inline', 'flex', 'grid', 'hidden', 'visible', 'absolute', 'relative', 'fixed', 'sticky', 'normal', 'bold', 'italic', 'underline'].includes(word)) {
          tokens.push({ text: word, type: 'keyword' });
        } else {
          tokens.push({ text: word, type: 'default' });
        }
        remaining = remaining.slice(word.length);
        continue;
      }

      // Fallback
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }

    return tokens;
  });
}

function tokenizeHTML(code: string): Token[][] {
  return code.split('\n').map(line => {
    const tokens: Token[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      // Whitespace
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], type: 'default' });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }

      // HTML comments
      const commentMatch = remaining.match(/^(<!--[\s\S]*?-->)/);
      if (commentMatch) {
        tokens.push({ text: commentMatch[1], type: 'comment' });
        remaining = remaining.slice(commentMatch[1].length);
        continue;
      }
      // WP comment blocks (<!-- wp:... -->)
      if (remaining.startsWith('<!--') || remaining.startsWith('-->')) {
        tokens.push({ text: remaining, type: 'comment' });
        remaining = '';
        continue;
      }

      // Tag open/close
      const tagMatch = remaining.match(/^(<\/?[a-zA-Z][a-zA-Z0-9-]*)/);
      if (tagMatch) {
        tokens.push({ text: tagMatch[1], type: 'tag' });
        remaining = remaining.slice(tagMatch[1].length);
        continue;
      }

      // Self-closing or closing >
      if (remaining.startsWith('/>') || remaining.startsWith('>')) {
        const c = remaining.startsWith('/>') ? '/>' : '>';
        tokens.push({ text: c, type: 'tag' });
        remaining = remaining.slice(c.length);
        continue;
      }

      // Attribute name
      const attrMatch = remaining.match(/^([a-zA-Z_:][a-zA-Z0-9_.:-]*)\s*=/);
      if (attrMatch) {
        tokens.push({ text: attrMatch[1], type: 'attribute' });
        remaining = remaining.slice(attrMatch[1].length);
        continue;
      }

      // Strings
      const strMatch = remaining.match(/^(["'](?:[^"'\\]|\\.)*["'])/);
      if (strMatch) {
        tokens.push({ text: strMatch[1], type: 'string' });
        remaining = remaining.slice(strMatch[1].length);
        continue;
      }

      // Operators (=)
      if (remaining[0] === '=') {
        tokens.push({ text: '=', type: 'operator' });
        remaining = remaining.slice(1);
        continue;
      }

      // Word
      const wordMatch = remaining.match(/^([a-zA-Z_-]+)/);
      if (wordMatch) {
        tokens.push({ text: wordMatch[1], type: 'default' });
        remaining = remaining.slice(wordMatch[1].length);
        continue;
      }

      // Fallback
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }

    return tokens;
  });
}

function tokenizeJS(code: string): Token[][] {
  const JS_KEYWORDS = new Set([
    'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
    'do', 'switch', 'case', 'break', 'continue', 'class', 'extends', 'new',
    'import', 'from', 'export', 'default', 'async', 'await', 'try', 'catch',
    'finally', 'throw', 'typeof', 'instanceof', 'in', 'of', 'this', 'super',
    'true', 'false', 'null', 'undefined', 'void', 'delete', 'yield',
  ]);

  return code.split('\n').map(line => {
    const tokens: Token[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], type: 'default' });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }
      if (remaining.startsWith('//')) {
        tokens.push({ text: remaining, type: 'comment' });
        remaining = '';
        continue;
      }
      const strMatch = remaining.match(/^(["'`](?:[^"'`\\]|\\.)*["'`])/);
      if (strMatch) {
        tokens.push({ text: strMatch[1], type: 'string' });
        remaining = remaining.slice(strMatch[1].length);
        continue;
      }
      const numMatch = remaining.match(/^(\d+\.?\d*)/);
      if (numMatch) {
        tokens.push({ text: numMatch[1], type: 'number' });
        remaining = remaining.slice(numMatch[1].length);
        continue;
      }
      const funcMatch = remaining.match(/^([a-zA-Z_$]\w*)\s*(?=\()/);
      if (funcMatch && !JS_KEYWORDS.has(funcMatch[1])) {
        tokens.push({ text: funcMatch[1], type: 'function' });
        remaining = remaining.slice(funcMatch[1].length);
        continue;
      }
      const wordMatch = remaining.match(/^([a-zA-Z_$]\w*)/);
      if (wordMatch) {
        const w = wordMatch[1];
        if (JS_KEYWORDS.has(w)) tokens.push({ text: w, type: 'keyword' });
        else if (w === 'true' || w === 'false') tokens.push({ text: w, type: 'boolean' });
        else if (w === 'null' || w === 'undefined') tokens.push({ text: w, type: 'null' });
        else tokens.push({ text: w, type: 'default' });
        remaining = remaining.slice(w.length);
        continue;
      }
      const opMatch = remaining.match(/^([=!<>]=?|&&|\|\||=>|\+|-|\*|\/|\.\.\.)/);
      if (opMatch) {
        tokens.push({ text: opMatch[1], type: 'operator' });
        remaining = remaining.slice(opMatch[1].length);
        continue;
      }
      const punctMatch = remaining.match(/^([(){}[\];:,.])/);
      if (punctMatch) {
        tokens.push({ text: punctMatch[1], type: 'punctuation' });
        remaining = remaining.slice(1);
        continue;
      }
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }
    return tokens;
  });
}

function tokenizeMarkdown(code: string): Token[][] {
  return code.split('\n').map(line => {
    const tokens: Token[] = [];
    let remaining = line;

    // Headings
    const hMatch = remaining.match(/^(#{1,6}\s+)(.*)/);
    if (hMatch) {
      tokens.push({ text: hMatch[1], type: 'keyword' });
      tokens.push({ text: hMatch[2], type: 'tag' });
      return tokens;
    }

    // List items
    const lMatch = remaining.match(/^(\s*[*+-]|\s*\d+\.)\s+/);
    if (lMatch) {
      tokens.push({ text: lMatch[1], type: 'operator' });
      remaining = remaining.slice(lMatch[1].length);
    }

    while (remaining.length > 0) {
      // Bold/Italic
      const boldMatch = remaining.match(/^(\*\*|__)(.*?)\1/);
      if (boldMatch) {
        tokens.push({ text: boldMatch[1], type: 'punctuation' });
        tokens.push({ text: boldMatch[2], type: 'keyword' });
        tokens.push({ text: boldMatch[1], type: 'punctuation' });
        remaining = remaining.slice(boldMatch[0].length);
        continue;
      }
      const italicMatch = remaining.match(/^(\*|_)(.*?)\1/);
      if (italicMatch) {
        tokens.push({ text: italicMatch[1], type: 'punctuation' });
        tokens.push({ text: italicMatch[2], type: 'variable' });
        tokens.push({ text: italicMatch[1], type: 'punctuation' });
        remaining = remaining.slice(italicMatch[0].length);
        continue;
      }

      // Links [text](url)
      const linkMatch = remaining.match(/^\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        tokens.push({ text: '[', type: 'punctuation' });
        tokens.push({ text: linkMatch[1], type: 'string' });
        tokens.push({ text: ']', type: 'punctuation' });
        tokens.push({ text: '(', type: 'punctuation' });
        tokens.push({ text: linkMatch[2], type: 'property' });
        tokens.push({ text: ')', type: 'punctuation' });
        remaining = remaining.slice(linkMatch[0].length);
        continue;
      }

      // Inline code
      const codeMatch = remaining.match(/^(`)(.*?)\1/);
      if (codeMatch) {
        tokens.push({ text: '`', type: 'punctuation' });
        tokens.push({ text: codeMatch[2], type: 'number' });
        tokens.push({ text: '`', type: 'punctuation' });
        remaining = remaining.slice(codeMatch[0].length);
        continue;
      }

      // Default
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }
    return tokens;
  });
}

function tokenizePlain(code: string): Token[][] {
  return code.split('\n').map(line => [{ text: line, type: 'default' as const }]);
}

function tokenize(code: string, language: CodeLanguage): Token[][] {
  if (!code) return [[]];
  switch (language) {
    case 'json':       return tokenizeJSON(code);
    case 'php':        return tokenizePHP(code);
    case 'css':        return tokenizeCSS(code);
    case 'html':       return tokenizeHTML(code);
    case 'javascript': return tokenizeJS(code);
    case 'markdown':   return tokenizeMarkdown(code);
    default:           return tokenizePlain(code);
  }
}

// ─── Language label + badge color ───────────────────────────────────────────

const LANGUAGE_META: Record<CodeLanguage, { label: string; color: string }> = {
  json:       { label: 'JSON',       color: 'bg-amber-500/20 text-amber-400' },
  php:        { label: 'PHP',        color: 'bg-indigo-500/20 text-indigo-400' },
  css:        { label: 'CSS',        color: 'bg-blue-500/20 text-blue-400' },
  html:       { label: 'HTML',       color: 'bg-red-500/20 text-red-400' },
  javascript: { label: 'JS',         color: 'bg-yellow-500/20 text-yellow-400' },
  markdown:   { label: 'MD',         color: 'bg-emerald-500/20 text-emerald-400' },
  text:       { label: 'TEXT',       color: 'bg-gray-500/20 text-gray-400' },
};

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * CodeBlock — Reusable code display component with:
 * - Language-dependent syntax coloring (JSON, PHP, CSS, HTML, JS)
 * - Line numbers
 * - Editable mode (toggle between read/edit)
 * - Copy-to-clipboard
 * - Language badge
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  label,
  maxHeight = 320,
  editable = false,
  onCodeChange,
  showLineNumbers = true,
  showCopy = true,
  className = '',
  fontSize = 'text-[11px]',
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCode, setEditedCode] = useState(code);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Keep editedCode in sync when code prop changes externally
  useEffect(() => {
    if (!isEditing) {
      setEditedCode(code);
    }
  }, [code, isEditing]);

  const displayCode = isEditing ? editedCode : code;
  const lines = tokenize(displayCode, language);
  const lineCount = lines.length;
  const gutterWidth = String(lineCount).length;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = displayCode;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [displayCode]);

  const handleToggleEdit = useCallback(() => {
    if (isEditing) {
      // Exiting edit mode — commit changes
      onCodeChange?.(editedCode);
    }
    setIsEditing(!isEditing);
  }, [isEditing, editedCode, onCodeChange]);

  const handleTextareaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCode(e.target.value);
  }, []);

  // Focus textarea when entering edit mode
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const meta = LANGUAGE_META[language];

  return (
    <div className={`relative group rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 bg-[#1e1e2e] ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#181825] border-b border-white/5">
        <div className="flex items-center gap-2">
          {label && (
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</span>
          )}
          <span className={`text-[9px] px-1.5 py-0.5 rounded ${meta.color}`}>
            {meta.label}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {editable && (
            <button
              onClick={handleToggleEdit}
              className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                isEditing
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
              title={isEditing ? 'Save & exit edit mode' : 'Edit code'}
            >
              {isEditing ? <Eye size={10} /> : <Pencil size={10} />}
              {isEditing ? 'Preview' : 'Edit'}
            </button>
          )}
          {showCopy && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          )}
        </div>
      </div>

      {/* Code area */}
      <div
        className={`overflow-auto ${fontSize} font-mono leading-[1.6]`}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {isEditing ? (
          /* ─── Edit mode: textarea with line numbers ─── */
          <div className="flex">
            {showLineNumbers && (
              <div
                className="flex-shrink-0 py-3 pl-3 pr-2 text-right select-none border-r border-white/5"
                aria-hidden="true"
              >
                {editedCode.split('\n').map((_, i) => (
                  <div key={i} className="text-gray-600 leading-[1.6]" style={{ fontSize: 'inherit' }}>
                    {i + 1}
                  </div>
                ))}
              </div>
            )}
            <textarea
              ref={textareaRef}
              value={editedCode}
              onChange={handleTextareaChange}
              spellCheck={false}
              className="flex-1 bg-transparent text-gray-300 py-3 px-3 resize-none outline-none leading-[1.6] min-h-[80px]"
              style={{
                fontFamily: 'inherit',
                fontSize: 'inherit',
                tabSize: 2,
                minHeight: `${Math.min(editedCode.split('\n').length * 1.6 * 11 + 24, maxHeight)}px`,
              }}
            />
          </div>
        ) : (
          /* ─── Read mode: highlighted code with line numbers ─── */
          <div className="flex">
            {showLineNumbers && (
              <div
                className="flex-shrink-0 py-3 pl-3 pr-2 text-right select-none border-r border-white/5"
                aria-hidden="true"
              >
                {lines.map((_, i) => (
                  <div key={i} className="text-gray-600 leading-[1.6]" style={{ fontSize: 'inherit' }}>
                    {i + 1}
                  </div>
                ))}
              </div>
            )}
            <pre className="flex-1 py-3 px-3 overflow-x-auto whitespace-pre m-0">
              {lines.map((lineTokens, lineIdx) => (
                <div key={lineIdx} className="leading-[1.6]">
                  {lineTokens.length === 0 ? (
                    <span>{'\n'}</span>
                  ) : (
                    lineTokens.map((token, tokIdx) => (
                      <span key={tokIdx} className={TOKEN_COLORS[token.type]}>
                        {token.text}
                      </span>
                    ))
                  )}
                </div>
              ))}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};