import React, { useState } from 'react';
import { MessageSquare, User, ThumbsUp, Reply, Flag, Clock, LogIn, UserCircle, Eye, EyeOff, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';
import { COMMENTS_UI, MOCK_COMMENTS } from '../../data/comments';

interface CommentsSectionProps {
  articleId: number;
  commentCount?: number;
}

// Mock comment data structure
interface Comment {
  id: number;
  author: string;
  avatarColor: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

/**
 * Comments Section Component
 * Supports logged-in and logged-out states with a toggle for demonstration.
 * Logged-out users see a registration prompt with link to commenting policy.
 * Logged-in users can submit comments.
 */
export const CommentsSection = ({ articleId, commentCount = 0 }: CommentsSectionProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [showReplyFormId, setShowReplyFormId] = useState<number | null>(null);

  const mockComments: Comment[] = MOCK_COMMENTS;

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      toast.error(COMMENTS_UI.messages.enterComment);
      return;
    }

    toast.success(COMMENTS_UI.messages.submitSuccess);
    setNewComment('');
  };

  return (
    <div className="border-t border-gray-200 dark:border-border py-12">
      <div className="alignwide">
        {/* Comments Header + Auth Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-border gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-brand-red" />
            <h2
              className="font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family"
              style={{
                fontVariationSettings: "var(--fvs-h2)",
                lineHeight: 'var(--lh-h2)',
                letterSpacing: 'var(--ls-h2)',
                fontSize: 'var(--text-h2)',
              }}
            >
              {COMMENTS_UI.header} ({mockComments.length})
            </h2>
          </div>
          
          {/* Auth state toggle — for demonstration only */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-card text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-muted transition-colors"
            title={COMMENTS_UI.auth.toggleTitle}
          >
            {isLoggedIn ? (
              <>
                <UserCircle size={16} className="text-green-600 dark:text-green-400" />
                <span>{COMMENTS_UI.auth.loggedInAs} <span className="font-bold text-brand-navy dark:text-foreground">{COMMENTS_UI.mockUser}</span></span>
                <span className="text-[10px] bg-gray-200 dark:bg-muted text-gray-500 dark:text-gray-400 rounded px-1.5 py-0.5 ml-1">{COMMENTS_UI.auth.demoTag}</span>
              </>
            ) : (
              <>
                <Eye size={16} className="text-gray-400 dark:text-gray-500" />
                <span>{COMMENTS_UI.auth.visitorView}</span>
                <span className="text-[10px] bg-gray-200 dark:bg-muted text-gray-500 dark:text-gray-400 rounded px-1.5 py-0.5 ml-1">{COMMENTS_UI.auth.demoTag}</span>
              </>
            )}
          </button>
        </div>

        {/* Logged-out State: Registration Prompt */}
        {!isLoggedIn && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-card dark:to-muted/50 rounded-xl p-6 md:p-8 mb-8 border border-gray-200 dark:border-border shadow-[var(--wp--preset--shadow--200)] dark:shadow-[var(--shadow-dark-200)]"
            style={{ borderRadius: 'var(--wp--custom--border-radius--400)' }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                <LogIn size={28} className="text-brand-red" />
              </div>
              <div className="flex-1">
                <h3
                  className="font-normal text-brand-navy dark:text-foreground mb-2 has-brand-serif-font-family"
                  style={{
                    fontVariationSettings: "var(--fvs-h3)",
                    lineHeight: 'var(--lh-h3)',
                    letterSpacing: 'var(--ls-h3)',
                    fontSize: 'var(--text-h3)',
                  }}
                >
                  {COMMENTS_UI.loggedOut.title}
                </h3>
                <p 
                  className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: COMMENTS_UI.loggedOut.description }}
                />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Link
                    to="/registreer"
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    <UserCircle size={18} />
                    {COMMENTS_UI.loggedOut.registerButton}
                  </Link>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {COMMENTS_UI.loggedOut.loginPrompt}{' '}
                    <Link to="/my-rekening" className="text-brand-red font-bold hover:underline">
                      {COMMENTS_UI.loggedOut.loginLink}
                    </Link>
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-input">
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Shield size={12} className="shrink-0" />
                    {COMMENTS_UI.moderation.prefix}{' '}
                    <Link 
                      to="/beleid/kommentaarbeleid" 
                      className="text-brand-red font-bold hover:underline"
                    >
                      {COMMENTS_UI.moderation.linkText}
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Logged-in State: Comment Form */}
        {isLoggedIn && (
          <div className="bg-gray-50 dark:bg-card rounded-xl p-6 mb-8 border border-gray-200 dark:border-border shadow-[var(--wp--preset--shadow--200)] dark:shadow-[var(--shadow-dark-200)]"
            style={{ borderRadius: 'var(--wp--custom--border-radius--400)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold">
                {COMMENTS_UI.mockUser.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-brand-navy dark:text-foreground text-sm">{COMMENTS_UI.mockUser}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{COMMENTS_UI.loggedIn.prompt}</p>
              </div>
            </div>
            <form onSubmit={handleSubmitComment}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={COMMENTS_UI.loggedIn.placeholder}
                className="w-full border border-gray-300 dark:border-input rounded-lg p-4 min-h-[120px] focus-brand resize-none bg-white dark:bg-background dark:text-foreground text-sm"
                maxLength={1000}
              />
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <Shield size={12} />
                  {COMMENTS_UI.moderation.prefix}{' '}
                  <Link to="/beleid/kommentaarbeleid" className="text-brand-red font-bold hover:underline">
                    {COMMENTS_UI.moderation.linkText}
                  </Link>.
                </p>
                <Button
                  type="submit"
                  className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-2 rounded-lg font-bold"
                >
                  {COMMENTS_UI.loggedIn.submitButton}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Comments List */}
        <div className="space-y-6">
          {mockComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              isLoggedIn={isLoggedIn}
              showReplyFormId={showReplyFormId}
              setShowReplyFormId={setShowReplyFormId}
            />
          ))}
        </div>

        {/* Empty State - shown when no mock comments */}
        {mockComments.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-card rounded-lg border border-gray-200 dark:border-border">
            <MessageSquare className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {COMMENTS_UI.messages.empty}
            </p>
            {!isLoggedIn && (
              <Link
                to="/registreer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-6 py-2 rounded-lg font-bold transition-colors"
              >
                <UserCircle size={16} />
                {COMMENTS_UI.messages.registerToComment}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Individual Comment Component
const CommentItem = ({
  comment,
  isReply = false,
  isLoggedIn,
  showReplyFormId,
  setShowReplyFormId,
}: {
  comment: Comment;
  isReply?: boolean;
  isLoggedIn: boolean;
  showReplyFormId: number | null;
  setShowReplyFormId: (id: number | null) => void;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLoggedIn) {
      toast.info(COMMENTS_UI.messages.loginRequiredLike);
      return;
    }
    setIsLiked(!isLiked);
  };

  const handleReply = () => {
    if (!isLoggedIn) {
      toast.info(COMMENTS_UI.messages.loginRequiredReply);
      return;
    }
    setShowReplyFormId(showReplyFormId === comment.id ? null : comment.id);
  };

  const handleReport = () => {
    toast.info(COMMENTS_UI.messages.reportComingSoon);
  };

  return (
    <div className={`${isReply ? 'ml-8 sm:ml-12 pt-4' : ''}`}>
      <div className="bg-white dark:bg-card rounded-lg p-5 border border-gray-100 dark:border-border shadow-[var(--wp--preset--shadow--200)] dark:shadow-[var(--shadow-dark-200)]"
        style={{ borderRadius: 'var(--wp--custom--border-radius--400)' }}
      >
        {/* Comment Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${comment.avatarColor} flex items-center justify-center text-white font-bold`}>
              {comment.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-brand-navy dark:text-foreground">{comment.author}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Clock size={12} />
                <span>{comment.timestamp}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleReport}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
            title={COMMENTS_UI.actions.reportTooltip}
          >
            <Flag size={16} />
          </button>
        </div>

        {/* Comment Content */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{comment.content}</p>

        {/* Comment Actions */}
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors ${
              isLiked ? 'text-brand-red' : 'text-gray-500 dark:text-gray-400 hover:text-brand-red'
            }`}
          >
            <ThumbsUp size={16} className={isLiked ? 'fill-current' : ''} />
            <span>{comment.likes + (isLiked ? 1 : 0)}</span>
          </button>
          
          {!isReply && (
            <button
              onClick={handleReply}
              className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors"
            >
              <Reply size={16} />
              <span>{COMMENTS_UI.actions.reply}</span>
            </button>
          )}
        </div>

        {/* Reply Form — only visible to logged-in users */}
        {showReplyFormId === comment.id && isLoggedIn && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-border">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-brand-red flex items-center justify-center text-white text-xs font-bold">
                {COMMENTS_UI.mockUser.charAt(0)}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Antwoord as <span className="font-bold text-brand-navy dark:text-foreground">{COMMENTS_UI.mockUser}</span></span>
            </div>
            <textarea
              placeholder="Skryf jou antwoord..."
              className="w-full border border-gray-300 dark:border-input rounded-lg p-3 text-sm min-h-[80px] focus-brand resize-none bg-white dark:bg-background dark:text-foreground"
            />
            <div className="flex gap-2 mt-2">
              <Button
                onClick={() => setShowReplyFormId(null)}
                variant="outline"
                className="text-sm px-4 py-1"
              >
                {COMMENTS_UI.actions.cancel}
              </Button>
              <Button
                onClick={() => {
                  toast.success(COMMENTS_UI.messages.replySuccess);
                  setShowReplyFormId(null);
                }}
                className="bg-brand-red hover:bg-brand-red-hover text-white text-sm px-4 py-1"
              >
                {COMMENTS_UI.actions.reply}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              isReply={true}
              isLoggedIn={isLoggedIn}
              showReplyFormId={showReplyFormId}
              setShowReplyFormId={setShowReplyFormId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;