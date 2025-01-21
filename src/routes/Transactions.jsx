import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { TransactionDetail } from "../components/TransactionDetail"

export const Transactions = () => {
    const { user } = useContext(AuthContext)
    
    return (
        <>
            <div id="transactions">
                <div className="titles">
                    <h1>Transactions</h1>
                </div>

                <div className="transactions">
                    <div className="transactionsList">
                        {
                            user.data.transactions.map((item, index) => <TransactionDetail key={index} transaction={item} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}