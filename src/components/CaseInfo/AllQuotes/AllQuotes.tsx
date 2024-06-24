import SingleQuote from "./SingleQuote";
import QuotesData from "../../../services/fakeData/QuotesData.json";
import { useEffect, useState } from "react";
export interface PaymentRecord {
  quoteNumber: string;
  value: number;
  totalValue: number;
  createdOn: string;
  status: string;
  paymentMethod: string;
}
const AllQuotes = ({ quotes }: any) => {
  // const [quotes, setQuotes] = useState<PaymentRecord[]>([]);
  // useEffect(() => {
  //     const fetchData = async () => {
  //       setQuotes(QuotesData as PaymentRecord[]);
  //     };
  //     fetchData();
  //   }, []);
  console.log("Alll quotesssss ==== ", quotes);

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
