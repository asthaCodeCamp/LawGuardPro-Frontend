import SingleQuote from "./SingleQuote";
import QuotesData from "../../../services/fakeData/QuotesData.json";
import { useEffect, useState } from "react";
export interface PaymentRecord {
    Quote_No: string,
    value: number;
    total_value: number;
    status: string;
    payment_method: string;
}
const AllQuotes = () => {
    const [quotes, setQuotes] = useState<PaymentRecord[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          setQuotes(QuotesData as PaymentRecord[]);
        };
        fetchData();
      }, []);

  return (
    <>
      <div className=" w-full ">
        {
            quotes.map(item => <SingleQuote key={item.Quote_No} quote={item}></SingleQuote>)
        }
      </div>
    </>
  );
};

export default AllQuotes;
