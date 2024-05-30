interface Upload {
  logo: string;
  name: string;
}
// Define the type for your case data
interface CaseAttachments {
  title: string;
  type: string;
  uploaded_by: Upload;
  addedDate: string;
}

type Documents = CaseAttachments[];

const documents: Documents = [
  {
    title: "OperationLegalGuardian.pdf",
    type: "PDF",
    uploaded_by: {
      logo: "/assets/man.png",
      name: "Tomal Ahmed",
    },
    addedDate: "20/11/2023",
  },
  {
    title: "ProjectLegalEagle.pdf",
    type: "PDF",
    uploaded_by: {
      logo: "/assets/notificationImage/icon-1.jpeg",
      name: "Saifuddin Ahmed",
    },
    addedDate: "02/11/2023",
  },
  {
    title: "CodeRedCase.pdf",
    type: "PDF",
    uploaded_by: {
      logo: "/assets/man.png",
      name: "Tomal Ahmed",
    },
    addedDate: "23/10/2023",
  },
  {
    title: "ProjectTrademarkTitan.docx",
    type: "DOC",
    uploaded_by: {
      logo: "/assets/notificationImage/icon-1.jpeg",
      name: "Saifuddin Ahmed",
    },
    addedDate: "10/09/2023",
  },
  {
    title: "LegalMazeMastermind.docx",
    type: "DOC",
    uploaded_by: {
      logo: "/assets/man.png",
      name: "Tomal Ahmed",
    },
    addedDate: "10/09/2023",
  },
  {
    title: "TheLitigationMatrix.docx",
    type: "DOC",
    uploaded_by: {
      logo: "/assets/man.png",
      name: "Tomal Ahmed",
    },
    addedDate: "10/09/2023",
  },
];

export default documents;
