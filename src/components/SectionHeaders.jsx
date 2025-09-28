export default function SectionHeaders({text}){
    return(
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-4xl p-2 uppercase">{text}</h2>
            <div className="border w-[100px]"></div>
        </div>
    )
}