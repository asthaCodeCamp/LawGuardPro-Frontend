import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useCreateQuote } from "@/modules/CaseQuotes/CaseQuotes.hooks";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { useRouter } from "next/router";
import { toast } from "sonner";

const Messages = () => {
  const [value, setValue] = useState(0);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 1000);
  };

  const { mutate: createQuotes, isPending } = useCreateQuote();
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);

  const onCreateQuote = () => {
    toast.success("Quote created successfully");
    createQuotes({
      caseId: data.data.caseId,
      lawerId: data.data.lawyerId,
      value: value,
      totalValue: value,
    });
  };

  useEffect(() => {
    const randomValue = getRandomValue();
    setValue(randomValue);
  }, []);

  return (
    <div className="w-full border-t-[1px]">
      <div className=" border-b-[1px] p-8">
        <h1 className="flex">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="40" height="40" rx="20" fill="#FEFCE8" />
            <path
              d="M18.3333 17.1666H23.3333C23.5543 17.1666 23.7663 17.0788 23.9226 16.9225C24.0789 16.7663 24.1667 16.5543 24.1667 16.3333C24.1667 16.1123 24.0789 15.9003 23.9226 15.744C23.7663 15.5878 23.5543 15.5 23.3333 15.5H18.3333C18.1123 15.5 17.9004 15.5878 17.7441 15.744C17.5878 15.9003 17.5 16.1123 17.5 16.3333C17.5 16.5543 17.5878 16.7663 17.7441 16.9225C17.9004 17.0788 18.1123 17.1666 18.3333 17.1666ZM16.6667 20.5H23.3333C23.5543 20.5 23.7663 20.4122 23.9226 20.2559C24.0789 20.0996 24.1667 19.8876 24.1667 19.6666C24.1667 19.4456 24.0789 19.2337 23.9226 19.0774C23.7663 18.9211 23.5543 18.8333 23.3333 18.8333H16.6667C16.4457 18.8333 16.2337 18.9211 16.0774 19.0774C15.9211 19.2337 15.8333 19.4456 15.8333 19.6666C15.8333 19.8876 15.9211 20.0996 16.0774 20.2559C16.2337 20.4122 16.4457 20.5 16.6667 20.5ZM16.6667 23.8333H23.3333C23.5543 23.8333 23.7663 23.7455 23.9226 23.5892C24.0789 23.4329 24.1667 23.221 24.1667 23C24.1667 22.7789 24.0789 22.567 23.9226 22.4107C23.7663 22.2544 23.5543 22.1666 23.3333 22.1666H16.6667C16.4457 22.1666 16.2337 22.2544 16.0774 22.4107C15.9211 22.567 15.8333 22.7789 15.8333 23C15.8333 23.221 15.9211 23.4329 16.0774 23.5892C16.2337 23.7455 16.4457 23.8333 16.6667 23.8333ZM26.6667 12.1666H13.3333C13.1123 12.1666 12.9004 12.2544 12.7441 12.4107C12.5878 12.567 12.5 12.7789 12.5 13V28C12.5 28.1547 12.5431 28.3064 12.6245 28.4381C12.7058 28.5697 12.8222 28.6761 12.9607 28.7453C13.0991 28.8145 13.254 28.8438 13.4082 28.8299C13.5623 28.816 13.7095 28.7595 13.8333 28.6666L15.5583 27.375L17.275 28.6666C17.4192 28.7748 17.5947 28.8333 17.775 28.8333C17.9553 28.8333 18.1308 28.7748 18.275 28.6666L20 27.375L21.725 28.6666C21.8692 28.7748 22.0447 28.8333 22.225 28.8333C22.4053 28.8333 22.5808 28.7748 22.725 28.6666L24.4417 27.375L26.1667 28.6666C26.2911 28.7593 26.4389 28.8155 26.5935 28.8287C26.7481 28.842 26.9033 28.8118 27.0417 28.7416C27.1791 28.6724 27.2947 28.5664 27.3756 28.4355C27.4565 28.3046 27.4995 28.1539 27.5 28V13C27.5 12.7789 27.4122 12.567 27.2559 12.4107C27.0996 12.2544 26.8877 12.1666 26.6667 12.1666ZM25.8333 26.3333L24.9417 25.6666C24.7974 25.5584 24.622 25.5 24.4417 25.5C24.2614 25.5 24.0859 25.5584 23.9417 25.6666L22.225 26.9583L20.5 25.6666C20.3558 25.5584 20.1803 25.5 20 25.5C19.8197 25.5 19.6442 25.5584 19.5 25.6666L17.775 26.9583L16.0583 25.6666C15.9141 25.5584 15.7386 25.5 15.5583 25.5C15.378 25.5 15.2026 25.5584 15.0583 25.6666L14.1667 26.3333V13.8333H25.8333V26.3333Z"
              fill="#CA8A04"
            />
          </svg>
          <span className="mt-2 ml-[16px] mr-[16px]">
            Total Quoted: $1500.37{" "}
          </span>
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="40" height="40" rx="20" fill="#F0FDF4" />
            <path
              d="M19.9998 12.1666C15.4165 12.1666 11.6665 15.9166 11.6665 20.5C11.6665 25.0833 15.4165 28.8333 19.9998 28.8333C24.5832 28.8333 28.3332 25.0833 28.3332 20.5C28.3332 15.9166 24.5832 12.1666 19.9998 12.1666ZM23.4998 19.0833L19.4998 23.0833C19.1665 23.4166 18.6665 23.4166 18.3332 23.0833L16.4998 21.25C16.1665 20.9166 16.1665 20.4166 16.4998 20.0833C16.8332 19.75 17.3332 19.75 17.6665 20.0833L18.9165 21.3333L22.3332 17.9166C22.6665 17.5833 23.1665 17.5833 23.4998 17.9166C23.8332 18.25 23.8332 18.75 23.4998 19.0833Z"
              fill="#16A34A"
            />
          </svg>
          <span className="ml-[16px] mt-2">Total Paid: $650.37</span>
        </h1>
      </div>
      <div>
        <div className="mt-[32px] ml-[32px] mr-[32px]">
          <div className="flex gap-4 text-[12px] font-bold items-center">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#EA3E08" />
                <path
                  d="M17.5 22.5003C17.3352 22.5003 17.174 22.5492 17.037 22.6408C16.9 22.7323 16.7932 22.8625 16.7301 23.0148C16.667 23.167 16.6505 23.3346 16.6827 23.4962C16.7148 23.6579 16.7942 23.8064 16.9107 23.9229C17.0273 24.0395 17.1758 24.1188 17.3374 24.151C17.4991 24.1831 17.6666 24.1666 17.8189 24.1036C17.9712 24.0405 18.1013 23.9337 18.1929 23.7966C18.2844 23.6596 18.3333 23.4985 18.3333 23.3337C18.3333 23.1126 18.2455 22.9007 18.0892 22.7444C17.933 22.5881 17.721 22.5003 17.5 22.5003ZM11.6666 21.667C11.4456 21.667 11.2337 21.7548 11.0774 21.9111C10.9211 22.0674 10.8333 22.2793 10.8333 22.5003V24.167C10.8333 24.388 10.9211 24.6 11.0774 24.7562C11.2337 24.9125 11.4456 25.0003 11.6666 25.0003C11.8877 25.0003 12.0996 24.9125 12.2559 24.7562C12.4122 24.6 12.5 24.388 12.5 24.167V22.5003C12.5 22.2793 12.4122 22.0674 12.2559 21.9111C12.0996 21.7548 11.8877 21.667 11.6666 21.667ZM28.3333 21.667C28.1123 21.667 27.9003 21.7548 27.7441 21.9111C27.5878 22.0674 27.5 22.2793 27.5 22.5003V24.167C27.5 24.388 27.5878 24.6 27.7441 24.7562C27.9003 24.9125 28.1123 25.0003 28.3333 25.0003C28.5543 25.0003 28.7663 24.9125 28.9226 24.7562C29.0788 24.6 29.1666 24.388 29.1666 24.167V22.5003C29.1666 22.2793 29.0788 22.0674 28.9226 21.9111C28.7663 21.7548 28.5543 21.667 28.3333 21.667ZM24.1666 15.8337H20.8333V14.767C21.0852 14.6216 21.2947 14.4128 21.4409 14.1613C21.587 13.9098 21.6649 13.6245 21.6666 13.3337C21.6666 12.8916 21.4911 12.4677 21.1785 12.1551C20.8659 11.8426 20.442 11.667 20 11.667C19.558 11.667 19.134 11.8426 18.8215 12.1551C18.5089 12.4677 18.3333 12.8916 18.3333 13.3337C18.3351 13.6245 18.4129 13.9098 18.5591 14.1613C18.7053 14.4128 18.9147 14.6216 19.1666 14.767V15.8337H15.8333C15.1703 15.8337 14.5344 16.0971 14.0655 16.5659C13.5967 17.0347 13.3333 17.6706 13.3333 18.3337V25.8337C13.3333 26.4967 13.5967 27.1326 14.0655 27.6014C14.5344 28.0703 15.1703 28.3337 15.8333 28.3337H24.1666C24.8297 28.3337 25.4656 28.0703 25.9344 27.6014C26.4033 27.1326 26.6666 26.4967 26.6666 25.8337V18.3337C26.6666 17.6706 26.4033 17.0347 25.9344 16.5659C25.4656 16.0971 24.8297 15.8337 24.1666 15.8337ZM21.4333 17.5003L21.0166 19.167H18.9833L18.5666 17.5003H21.4333ZM25 25.8337C25 26.0547 24.9122 26.2666 24.7559 26.4229C24.5996 26.5792 24.3877 26.667 24.1666 26.667H15.8333C15.6123 26.667 15.4003 26.5792 15.2441 26.4229C15.0878 26.2666 15 26.0547 15 25.8337V18.3337C15 18.1126 15.0878 17.9007 15.2441 17.7444C15.4003 17.5881 15.6123 17.5003 15.8333 17.5003H16.85L17.5 20.2003C17.5456 20.3852 17.6532 20.5489 17.8048 20.6641C17.9564 20.7794 18.143 20.8392 18.3333 20.8337H21.6666C21.857 20.8392 22.0435 20.7794 22.1952 20.6641C22.3468 20.5489 22.4544 20.3852 22.5 20.2003L23.15 17.5003H24.1666C24.3877 17.5003 24.5996 17.5881 24.7559 17.7444C24.9122 17.9007 25 18.1126 25 18.3337V25.8337ZM22.5 22.5003C22.3352 22.5003 22.174 22.5492 22.037 22.6408C21.9 22.7323 21.7932 22.8625 21.7301 23.0148C21.667 23.167 21.6505 23.3346 21.6827 23.4962C21.7148 23.6579 21.7942 23.8064 21.9107 23.9229C22.0273 24.0395 22.1758 24.1188 22.3374 24.151C22.4991 24.1831 22.6666 24.1666 22.8189 24.1036C22.9712 24.0405 23.1013 23.9337 23.1929 23.7966C23.2844 23.6596 23.3333 23.4985 23.3333 23.3337C23.3333 23.1126 23.2455 22.9007 23.0892 22.7444C22.933 22.5881 22.721 22.5003 22.5 22.5003Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>LawGuard Pro</div>
            <div className="text-[#EA3E08] border-[#EA3E08] border-[0.8px] px-4 bg-[#FFF5F2] rounded-xl text-[12px] font-normal">
              Bot
            </div>
          </div>
          <div className="mt-[8px]">
            <p className="px-3 py-3 bg-[#F6F6F6] text-[12px] ml-[48px] rounded-md mr-[8%]">
              Hi Tomal Ahmed. Thank you for submitting your inquiry through
              LawGuard Pro. This looks like it will fall under our fixed fe
              contact review service starting at $99 + vat. I will refer you to
              our Employment specialist right away and she will call you shortly
              to discuss your requirements. Best wishes, LawGuard Pro Bot.
            </p>
          </div>
        </div>
        <div className="mt-[24px] bg-[#EEF2FF] ml-[15%] mr-[15%] text-center py-2 rounded-md">
          <p className="text-[#1E40AF] text-[11px]">
            Your file has now been referred to one of our expert lawyers who
            will be in contact with you very shortly.
          </p>
        </div>
        <div className="mt-[24px] ml-[32px] mr-[32px]">
          <div className="flex gap-4 text-[12px] font-bold items-center">
            <div>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </div>
            <div>Saifuddin Ahmed</div>
            <div className="text-[#6B0F99] border-[#6B0F99] border-[0.8px] px-4 bg-[#FBF4FF] rounded-xl text-[12px] font-normal">
              Lawyer
            </div>
          </div>
          <div className="mt-[8px]">
            <p className="px-3 py-3 bg-[#F6F6F6] text-[12px] ml-[48px] rounded-md mr-[30%]">
              Hi Tomal, thank you for your inquiry. I will give you a call soon
              to discuss your inquiry further.Kind regards, Saifuddin Ahmed.
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex gap-4 mt-[24px] text-[12px] font-bold  justify-end mr-[32px] items-center">
              <div>Tomal Ahmed</div>
              <div>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </div>
            </div>
          </div>
          <div className="text-end ml-[80%] mr-[78px] mb-[100px]">
            <p className="px-3 py-3 bg-[#F6F6F6] text-[12px] ml-[48px] rounded-md mt-[8px]">
              Hello
            </p>
          </div>
          <div className="mt-[24px] ml-[32px] mr-[32px] ">
            <div className="flex gap-4 text-[12px] font-bold items-center">
              <div>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </div>
              <div>Saifu Ahmed</div>
              <div className="text-[#6B0F99] border-[#6B0F99] border-[0.8px] px-4 bg-[#FBF4FF] rounded-xl text-[12px] font-normal">
                Lawyer
              </div>
            </div>
            <div className="mt-[8px] border rounded p-3 mb-14">
              <p className="text-gray-500">Description</p>
              <p className="mb-3 mt-2">
                Navigating the intricate web of legality requires diligence,
                wisdom, and unwavering commitment. Our team's expertise
                illuminates the path to justice, ensuring your rights are upheld
                and your voice is heard. Together, we forge a foundation of
                trust, advocating for a brighter, more equitable tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 border rounded-lg text-center">
                  <h3 className="text-gray-500 text-sm">VALUE (EX VAT)</h3>
                  <p className="text-xl font-semibold">${value}</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <h3 className="text-gray-500 text-sm">TOTAL VALUE</h3>
                  <p id="total-value" className="text-xl font-semibold">
                    ${value + 50}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-3 py-3 w-40 bg-[#6B0F99] hover:bg-[#6B0F99] text-white rounded"
                  onClick={() => onCreateQuote()}
                >
                  {isPending ? "Loading..." : "ACCEPT QUOTE"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex gap-4  ml-[8%]  mb-36">
          <Box
            sx={{
              width: 700,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth id="fullWidth" />
          </Box>
          <Button
            className="font-bold bg-[#6B0F99] hover:bg-[#6B0F99] w-[20%]"
            variant="contained"
          >
            Send <SendIcon className="ml-[8px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
