import { useEffect } from "react"

export const BillDetail = ({bills}) => {

    return (
        <div className="transactionsCard">
            <h3 className="name">{bills.name}</h3>

            <div className="transactionDetail">
                <p className="value">${bills.amount}</p>

                <span>{bills.status}</span>
            </div>
        </div>
    )
}