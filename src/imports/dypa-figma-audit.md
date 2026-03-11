# **Audit: Diepapieralt Figma‑Make Prototype**

## **Purpose**

Diepapieralt appears to be a German‑language project (possibly a magazine or catalogue). This audit will improve its code structure, enforce BEM and WordPress standards, and optimise for memory and reusability.

## **Audit Areas**

1. **Memory optimisation** – Execute the memory-reduction-audit.md prompt first. Identify large images, PDF embeds or rich typography that may push the file towards the 2 GB limit. Compress assets, flatten complex vector illustrations and remove unused layers[\[1\]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem#:~:text=,Figma%20may%20not%20function%20properly).  
     
2. **DRY & reusable templates** – Detect repeated layouts such as article cards, hero banners, or navigation bars. Recommend creating reusable components or WordPress block patterns to avoid duplication. Move static article metadata into JSON files or data modules.  
     
3. **BEM & CSS modularity** – Check that classes follow the Semantic BEM architecture[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L65-L100). Break up any large CSS files into per‑component or per‑page files and ensure dark‑mode variants use the .dark pattern[\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L104-L117). Remove any leftover Tailwind utilities[\[4\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L210-L220).  
     
4. **WordPress token usage** – Verify that colours, fonts and spacing refer to WordPress preset variables and LSX design tokens[\[5\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L131-L155). Replace hard‑coded values with variables. Ensure typography uses the approved fonts (Lexend and Manrope).  
     
5. **Content & configuration separation** – Move hard‑coded strings (e.g. labels, dates) and numeric values into configuration files or localisation files. Ensure the code can be reused across other projects by referencing external config instead of inline values.

## **Deliverables**

* Write an audit report AUDIT\_REPORT\_Diepapieralt.md in /reports/ summarising memory issues, DRY violations, BEM compliance and token usage.  
    
* After the report is finished, produce TASKS\_Diepapieralt.md with prioritised action items.

---

[\[1\]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem#:~:text=,Figma%20may%20not%20function%20properly) Figma Memory Limit \- This file is almost out of browser memory figma

[https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem)

[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L65-L100) [\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L104-L117) [\[4\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L210-L220) [\[5\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L131-L155) css-architecture.md

[https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md)  