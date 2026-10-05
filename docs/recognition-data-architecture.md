# Recognition Platform Data Architecture

This document outlines the architecture for transforming a Google Form nomination into an official Pioneer record, profile, and certificate.

## 1. Current Nomination Form Audit

Based on the actual live form connected to `NOMINATION_FORM_URL`, the current questions are:

**1 — THE NOMINEE**
*   **Who are you nominating?** (Radio) - Required. Provides internal context (self vs third-party). Maps to Admin/Internal.
*   **Full name of nominee** (Short text) - Required. Identity. Maps to Pioneer `name` and Certificate.
*   **Professional title / designation** (Short text) - Required. Identity. Maps to Pioneer `recognition` or subtitle.
*   **City** (Short text) - Required. Context. Maps to Admin and potentially Profile.
*   **State / Union Territory** (Dropdown) - Required. Context. Maps to Admin and potentially Profile.
*   **Instagram profile** (Short text) - Optional. Context/Profile. Maps to Profile social links.
*   **LinkedIn profile** (Short text) - Optional. Context/Profile. Maps to Profile social links.
*   **Website / Portfolio** (Short text) - Optional. Context/Profile. Maps to Profile social links.

**2 — AREA OF RECOGNITION**
*   **Primary category** (Dropdown) - Required. Maps directly to Pioneer `category` and Certificate.
*   **Specific area of work** (Short text) - Required. Evaluation. Maps to editorial `whatTheyDo`.

**3 — THE STORY**
*   **Tell us about the nominee.** (Paragraph) - Required. Evaluation. Maps to editorial `about`.
*   **What is their most significant achievement?** (Paragraph) - Required. Evaluation. Maps to editorial `theirWork`.
*   **Why do you believe they deserve recognition?** (Paragraph) - Required. Evaluation. Maps to editorial `whyRecognised`.
*   **What impact has their work created?** (Paragraph) - Required. Evaluation. Maps to Pioneer Note.
*   **How long have they been doing this?** (Short text) - Required. Evaluation context. Internal/Admin.

**4 — EVIDENCE & RECOGNITION**
*   **Links to work, achievements or evidence** (Paragraph) - Optional. Verification. Internal/Admin.
*   **Has the nominee previously received recognition?** (Radio) - Required. Verification. Internal/Admin.
*   **If yes, please provide details.** (Paragraph) - Optional. Verification. Internal/Admin.

**5 — CONTACT DETAILS**
*   **Nominee's email** (Short text) - Required. Private admin contact. MUST NOT BE PUBLIC.
*   **Nominee's phone / WhatsApp** (Short text) - Optional. Private admin contact. MUST NOT BE PUBLIC.
*   **Nominator's name** (Short text) - Required. Private admin context. MUST NOT BE PUBLIC.
*   **Nominator's email** (Short text) - Required. Private admin contact. MUST NOT BE PUBLIC.
*   **Nominator's Instagram** (Short text) - Optional. Private admin contact. MUST NOT BE PUBLIC.

**6 — DECLARATION**
*   **Please confirm the following** (Checkboxes) - Required. Legal/Consent. Internal/Admin.

---

## 2. Information Gaps

When comparing the current nomination form against the eventual platform requirements, the following gaps exist:

### REQUIRED BEFORE REVIEW
*(No gaps. The current form collects sufficient context for initial review.)*

### REQUIRED BEFORE RECOGNITION
*   **Portrait:** The form does not ask for a photo. A high-quality editorial portrait must be sourced or requested directly from the Pioneer before they can be formally recognised.

### REQUIRED FOR PROFILE
*   **Editorial Summary:** Form submissions are raw. We need a system field for the editorially rewritten `pioneerNote` and `shortDescription`.

### REQUIRED FOR CERTIFICATE
*   **Certificate ID:** System-generated unique identifier.
*   **Verification URL:** System-generated URL where the certificate can be authenticated.
*   **Award Year:** System-generated/Admin-selected based on the cohort.

### OPTIONAL / FUTURE
*   **Nominee Consent for Publication:** If nominated by a third party, we need a formal sign-off from the nominee before publishing their profile or issuing a certificate.

---

## 3. Private vs Public Data Model

### PRIVATE / ADMIN DATA (Never Exposed)
*   Nominee email, phone, and direct contact details.
*   Nominator identity, email, and social profiles.
*   Raw submission text (before editorial review).
*   Evidence links, reference URLs.
*   Internal review notes, scoring, and verification status.
*   Consent records.

### PUBLIC PIONEER DATA (Exposed on Website)
*   Name & Professional Identity (recognition title).
*   Category & Award Year.
*   Portrait (sourced editorially).
*   Editorially approved bio, work description, and impact statement.
*   Pioneer Note (custom editorial citation).
*   Certificate ID and verification status.

---

## 4. Canonical Pioneer Record

Proposed canonical structure for `src/types/pioneer.ts`:

```typescript
export interface Pioneer {
  // IDENTITY
  id: string; // required, system-generated
  slug: string; // required, system-generated
  name: string; // required
  displayName?: string; // optional
  professionalIdentity: string; // required
  
  // RECOGNITION
  recognitionTitle: string; // required
  category: string; // required
  awardYear: string; // required
  recognitionDate?: string; // optional, system-generated
  pioneerNote?: string; // optional (editorial)
  whyRecognised?: string; // optional (editorial)

  // PROFILE
  portrait?: string; // optional (must be sourced before publication)
  shortDescription: string; // required (editorial)
  about?: string; // optional (editorial)
  whatTheyDo?: string; // optional (editorial)
  theirWork?: string; // optional (editorial)
  
  // CERTIFICATE
  certificateId?: string; // optional, system-generated
  certificateIssueDate?: string; // optional, system-generated
  certificateStatus?: 'pending' | 'issued' | 'revoked'; // optional
  verificationUrl?: string; // optional, system-generated

  // ADMIN / LIFECYCLE
  nominationId?: string; // optional
  reviewStatus: 'pending' | 'in_review' | 'verified' | 'approved' | 'declined'; // required
  publicationStatus: 'draft' | 'published' | 'archived'; // required
  createdAt: string; // required, system-generated
  updatedAt: string; // required, system-generated
}
```

---

## 5. Nomination ? Pioneer Mapping

| Nomination field | Pioneer field | Transformation |
| :--- | :--- | :--- |
| Full name of nominee | `name` | DIRECT |
| Professional title | `professionalIdentity` / `recognitionTitle` | EDITORIAL |
| Primary category | `category` | MAPPED (to internal slug) |
| Tell us about the nominee | `about` | EDITORIAL |
| Specific area of work | `whatTheyDo` | EDITORIAL |
| Most significant achievement | `theirWork` | EDITORIAL |
| Why they deserve recognition | `whyRecognised` / `pioneerNote` | EDITORIAL |
| Contact Information (Email/Phone) | *None* | INTERNAL |
| Evidence & Links | *None* | INTERNAL |

---

## 6. Lifecycle & Status Model

The journey from form submission to published Pioneer follows these discrete states:

1.  **NOMINATED:** Form submitted. Data resides in the private admin layer.
2.  **UNDER_REVIEW:** Admin is actively reviewing the submission.
3.  **VERIFICATION:** Reviewer is checking evidence/links and potentially contacting the nominee/nominator.
4.  **EVALUATION:** Contextual assessment of the work and impact.
5.  **RECOGNIZED:** Formally approved. The canonical `Pioneer` record is generated, but `publicationStatus` is `draft`.
6.  **PUBLISHED:** The Pioneer profile is live, and the certificate is issued and verifiable.
7.  **DECLINED:** Nomination did not meet the criteria. (Remains internal).
8.  **WITHDRAWN:** Nominee declined the recognition or requested removal.

---

## 7. Certificate Data Model

The future certificate component will require the following payload, heavily dependent on System and Editorial generation:

*   **Recipient Name:** `name` (NOMINATION / DIRECT)
*   **Category:** `category` (NOMINATION / MAPPED)
*   **Award Year:** `awardYear` (SYSTEM)
*   **Recognition Title:** `recognitionTitle` (EDITORIAL)
*   **Pioneer Note:** `pioneerNote` (EDITORIAL)
*   **Portrait:** `portrait` (EDITORIAL SOURCED)
*   **Official Seal:** Hardcoded SVG/Asset (SYSTEM)
*   **Certificate ID:** `certificateId` (SYSTEM)
*   **Verification URL:** `verificationUrl` (SYSTEM)

---

## 8. Public Profile Data Model

The `/pioneers/[slug]` profile page will consume only the **PUBLIC PIONEER DATA**.
It will rely entirely on editorially written publication data. It will **not** pipe raw Google Form answers to the UI.

Profile fields:
*   Name
*   Recognition
*   Category
*   Portrait
*   About
*   What They Do
*   Their Work
*   Why Recognised
*   Pioneer Note
*   Award year
*   Verification Reference

---

## 9. Minimum Viable Nomination

The current form hits the perfect balance. It is already the Minimum Viable Nomination. 

**Essential at submission:**
*   Nominee identity & contact.
*   Category.
*   A basic explanation of their work and impact.

**Can be collected later (Before Recognition):**
*   Portrait image.
*   Formal consent (if third-party nomination).

**Should only be created internally:**
*   Editorial copy (`shortDescription`, `pioneerNote`).
*   Certificate IDs.

---

## 10. Data Privacy Boundaries

**CRITICAL SAFEGUARDS:**
1.  **Email and Phone Numbers** must remain strictly within the Google Form / Private Admin layer. They must never be synchronized to the public `Pioneer` record.
2.  **Nominator Details** must remain confidential to protect those who submit third-party nominations.
3.  **Unverified Evidence/Claims** submitted in the form must not be published. All public text must be manually rewritten (Editorial Transformation) to ensure accuracy and tone.

---

## 11. Recommended Next Implementation Step

With the architecture audited, the recommended next step is to **update the `src/types/pioneer.ts` interface** to match the Canonical Pioneer Record defined in Section 4, and then build the **individual Pioneer profile pages (`/pioneers/[slug]`)** using static mock data to establish the design and verify the editorial mapping before any real database is connected.
