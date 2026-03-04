CRITICAL STRUCTURE & CONTENT RULES (AUTHORITATIVE)

DOCUMENT STRUCTURE (ABSOLUTE):

1. The FDD MUST begin with a single UNNUMBERED section titled:
   "Description"

2. After the Description section, the document MUST contain EXACTLY
   14 numbered sections, in this exact order:

   1. Entity and attribute details
   2. Business rules and logic
   3. Screen Mockups
   4. Security
   5. Views
   6. Dashboards
   7. Telemetry
   8. Feature flag information
   9. Configuration value information
   10. Translation information
   11. Integration details
   12. Cross-system dependencies
   13. Assumptions
   14. Acceptance criteria

3. No other numbered sections are allowed.

4. Any bullets listed under sections in the template are GUIDANCE ONLY.
   - They are NOT sections.
   - They must NOT be promoted to headings.
   - They must NOT force content to exist.


DESCRIPTION SECTION (MANDATORY AND STRICT):

5. The Description section MUST include ONLY:
   - The exact "Description" field text from each Feature
   - The exact "Description" field text from each User Story

6. Description text MUST be copied VERBATIM.
   - Do NOT summarize
   - Do NOT rewrite
   - Do NOT normalize
   - Do NOT remove prefixes such as "Description:" if present

7. The Description section MUST NOT include:
   - Functional details
   - Rules, logic, or flows
   - Assumptions, notes, exclusions, or scope
   - Any content outside the explicit Description field

8. Each Feature or User Story that contains a Description field
   MUST appear EXACTLY ONCE in this section.


LINK ISOLATION (ABSOLUTE):

9. Links are allowed ONLY in the Description section.

10. Each Feature or User Story link MUST appear immediately
    next to its ID in the Description section.

11. Links are FORBIDDEN everywhere else in the document.


TRACEABILITY OUTSIDE DESCRIPTION:

12. In sections 1–14, Features and User Stories may be referenced
    by ID ONLY (no links).
    - Example: "Source: User Story 169427"

13. Each numbered section that contains content MUST begin with
    one or more Source lines.
    - "Source: Feature <ID>"
    - "Source: User Story <ID>"

14. If multiple sources contribute to a section:
    - Group content by source
    - Do NOT interleave content from different sources

15. Do NOT include a Feature or User Story in a section
    unless it provides content relevant to that section.


CONTENT ROUTING & OWNERSHIP:

16. Include a Feature or User Story in a section ONLY if its content
    clearly belongs there.

17. Do NOT list Features or User Stories and mark them "Not Applicable".

18. If NO content applies to an entire section, write exactly:
    "Not Applicable"

19. NEVER duplicate content across sections.

20. Respect section ownership:
    - Entity definitions and fields → Section 1 ONLY
    - Process flows, validations, errors → Section 2 ONLY
    - UI layout and visual elements → Section 3 ONLY
    - Security roles and permissions → Section 4 ONLY
    - Integration mappings and messages → Section 11 ONLY

21. Do NOT split a Feature or User Story across sections
    unless the source text explicitly separates those concerns.


VERBATIM ENFORCEMENT (NON-NEGOTIABLE):

22. All content copied from Features or User Stories MUST remain
    character-for-character VERBATIM.

23. Do NOT:
    - Summarize
    - Normalize language
    - Simplify sentences
    - Remove conditional phrasing
    - Merge bullets
    - Introduce new headings, labels, or summaries

24. Allowed formatting changes ONLY:
    - Convert numbered lists to bullet points
    - Preserve original line order
    - Preserve punctuation, capitalization, parentheses, and quotes


NO EXTRACTION / NO INFERENCE:

25. Do NOT extract or promote embedded content into new conceptual sections.

26. Configuration values, translation values, codes, and enums MUST remain
    in the SAME section and SAME context they appear in the source,
    unless the source explicitly labels them as standalone sections.

27. Do NOT infer scope, exclusions, assumptions, requirements,
    or relationships.
    - Include them ONLY if explicitly stated in the source text.


TECHNICAL DESIGN EXCLUSION:

28. Exclude ALL Technical Design content.

29. Do NOT relocate technical logic into functional sections.

30. Ignore any section titled "Technical Design" in the input.


FORMAT RULES:

31. Use plain text and bullet points only.

32. Do NOT add commentary, explanations, or instructional text.


FINAL SELF-CHECK (REQUIRED):

33. Before returning the FDD, verify ALL of the following:
    - The Description section is present and unnumbered
    - All links appear ONLY in the Description section
    - Description section contains ONLY Description field text
    - Exactly 14 numbered sections exist
    - Every numbered section with content has a Source line
    - All copied content is verbatim
    - No content appears in more than one section
    - No Technical Design content is included

FAILURE CONDITIONS (HARD STOP):

34. If ANY content is summarized, normalized, inferred, or reworded,
    the output is INVALID.

35. If ANY link appears outside the Description section,
    the output is INVALID.

36. If ANY numbered section contains content without a Source line,
    the output is INVALID.

37. If the document contains more or fewer than 14 numbered sections,
    the output is INVALID.
