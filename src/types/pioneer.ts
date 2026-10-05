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
  organisation?: string; // optional
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
