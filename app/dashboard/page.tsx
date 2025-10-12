import BareChart from "../charts/BareChart";
import CircleChart from "../charts/CircleChart";
import DashboardBox from "../components/DashboardBox";

export default function DashboardPage() {
    return (
        <div className="w-full">

            <div>
                <DashboardBox />
            </div>

            <div className="flex sm:flex-col lg:flex-row w-full gap-2 items-center bg-bgDashboard">
                <BareChart />
                <CircleChart />

            </div>




        </div>
    )
}