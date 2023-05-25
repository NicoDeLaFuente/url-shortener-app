import InputContainer from "../InputContainer/InputContainer"
import Card from "../Card/Card"


export default function AdvanceStatistics () {
    return  <section className=" mt-8 pb-5 bg-bgGray flex flex-col items-center gap-4 justify-center sm: mt-20">
                <InputContainer/>
                <h2 className="text-2xl font-bold text-center text-veryDarkViolet sm:pt-10 sm:text-3xl font-bold">Advance Statistics</h2>
                <p className="mb-5 text-md text-grayViolet text-center px-4 sm:max-w-md sm:px-0">Track how your links are performing across the web with our advanced statistics dashboard</p>
                <Card />
                
            </section>
}

/* className="flex flex-col gap-10 sm:grid sm:grid-cols-3 sm:grid-rows-5 sm:max-w-5xl sm:gap-y-0 g sm:gap-x-2" */