import SingleQuote from "./SingleQuote";

export interface PaymentRecord {
  quoteNumber: string;
  value: number;
  totalValue: number;
  createdOn: string;
  status: string;
  paymentMethod: string;
}

const AllQuotes = ({ quotes }: any) => {
  return (
    <>
      <div className=" w-full ">
        {quotes.map((item: any): any => (
          <SingleQuote key={item.quoteId} quote={item}></SingleQuote>
        ))}
      </div>
    </>
  );
};

export default AllQuotes;
