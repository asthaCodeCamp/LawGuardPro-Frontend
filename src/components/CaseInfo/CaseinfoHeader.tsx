import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const CaseinfoHeader = () => {
    return (
        <div className="m-[32px] flex justify-between gap-[500px]">
            <div>
                <div className="flex">
                    <h1 className="text-[24px] font-[600] mr-[24px]">Share Transfer & Share Issuance</h1>
                    <div className="mt-1"><p className="text-[12px] font-[600] text-[#16A34A] border-[#16A34A] bg-[#F0FDF4] border-[0.8px] text-center px-2 py-1 rounded-2xl">WORKING</p></div>
                </div>
                <div className="mt-[8px] flex">
                    <p className="border-r-2 text-[16px] font-[400] pr-[16px]">CASE NO: #012546</p>
                    <p className="ml-[16px] text-[16px] font-[400]">LAST UPDATED: <span className="font-[600]">20/10/2023</span></p>
                </div>
            </div>
            <div className='bg-[#FDF4FF] text-[#6B0F99] w-[30px] h-[30px] text-center'>
                <InfoOutlinedIcon className='mt-1'/>
            </div>
        </div>
    )
}
export default CaseinfoHeader;