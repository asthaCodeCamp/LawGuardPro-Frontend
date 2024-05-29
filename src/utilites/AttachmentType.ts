interface Attachment {
  type: string;
}

export const AttachmentType: readonly Attachment[] = [
  { type: "PDF" },
  { type: "DOC" },
  { type: "XLSX" },
];
