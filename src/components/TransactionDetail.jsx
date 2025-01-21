export const TransactionDetail = ({transaction}) => {

    return (
        <div className="transactionsCard">
            <div className="image">
                <img src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="" />
            </div>

            <h3 className="name">{transaction.name}</h3>

            <div className="transactionDetail">
                {
                    transaction.type === 'expense' ? <p className="value expense">-${transaction.amount}</p> : <p className="value income">+${transaction.amount}</p>
                }
                
                <span>{transaction.date}</span>
            </div>
        </div>
    )
}