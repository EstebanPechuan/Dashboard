import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { BillDetail } from "../components/BillDetail"

export const Bills = () => {
    const { user } = useContext(AuthContext)
    
    return (
        <>
            <div id="bills">
                <div className="titles">
                    <h1>Bills</h1>
                </div>

                <div className="bills">
                    <div className="billsList">
                        {
                            user?.data.bills.details.map((item, index) => <BillDetail key={index} bills={item} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}