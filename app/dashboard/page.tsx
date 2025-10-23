import BareChart from "../charts/BareChart";
import CircleChart from "../charts/CircleChart";
import DashboardBox from "../components/DashboardBox";

export default function DashboardPage() {
    return (
        <div className="w-full overflow-x-auto p-2">

            <div>
                <DashboardBox />
            </div>

            <div className=" grid md:grid-cols-1 lg:grid-cols-2 w-full gap-2 items-center bg-bgDashboard ">

                <div>
                    <BareChart />
                </div>
                <div>
                    <CircleChart />
                </div>
            </div>


        </div>
    )
}