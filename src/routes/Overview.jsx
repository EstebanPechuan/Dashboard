import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import { TransactionDetail } from "../components/TransactionDetail"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Overview = () => {
    const { user } = useContext(AuthContext)

    const graphData = {
        labels: ['Entertainment', 'Bills', 'Dining Out', 'Personal Care'],
        datasets: [
          {
            label: 'Amount',
            data: [ 50, 750, 75, 100],
            backgroundColor: [
                '#297b77',
                '#81c9d7',
                '#f1cdab',
                '#625f70',
            ],
            borderColor: [
                '#1f5c59',
                '#5e939d',
                '#af9278',
                '#413d51',
            ],
            borderWidth: 1,
          },
        ],
      };
    
    return (
        <>            
            <div id="overview">
                <div className="titles">
                    <h1>Overview</h1>

                    <h2>Welcome, {user?.name || 'Esteban Pechuan'}</h2>
                </div>

                <div className="detailsBox">
                    <div className="balance">
                        <h4>Current Balance</h4>
                        <p>${user?.data.overview.currentBalance}</p>
                    </div>

                    <div className="income">
                        <h4>Income</h4>
                        <p>${user?.data.overview.income}</p>
                    </div>
                    
                    <div className="expenses">
                        <h4>Expenses</h4>
                        <p>${user?.data.overview.expenses}</p>
                    </div>
                </div>

                <div className="everyGroup">
                    <div className="pots">
                        <div className="texts">
                            <h2>Pots</h2>

                            <Link to={'#'}>
                                See Details
                                <Icon icon="material-symbols-light:play-arrow-rounded" width="24" height="24" />
                            </Link>
                        </div>

                        <div className="totalPots">
                            <div className="info">
                                <Icon icon="material-symbols:savings-rounded" width="40" height="40" />

                                <div className="infoTexts">
                                    <h4>Total Saved</h4>

                                    <p>${user.data.pots.totalSaved}</p>
                                </div>
                            </div>

                            <div className="lastPots">
                                <h4>{user.data.pots.details[0].name}</h4>

                                <span>${user.data.pots.details[0].amount}</span>
                            </div>

                            <div className="lastPots">
                                <h4>{user.data.pots.details[1].name}</h4>

                                <span>${user.data.pots.details[1].amount}</span>
                            </div>

                            <div className="lastPots">
                                <h4>{user.data.pots.details[2].name}</h4>

                                <span>${user.data.pots.details[2].amount}</span>
                            </div>

                            <div className="lastPots">
                                <h4>{user.data.pots.details[3].name}</h4>

                                <span>${user.data.pots.details[3].amount}</span>
                            </div>
                        </div>
                    </div>

                    <div className="budgets">
                        <div className="texts">
                            <h2>Budgets</h2>

                            <Link to={'#'}>
                                See Details
                                <Icon icon="material-symbols-light:play-arrow-rounded" width="24" height="24" />
                            </Link>
                        </div>

                        <div className="graph">
                            <Doughnut data={graphData} />
                        </div>
                    </div>

                    <div className="transactions">
                        <div className="texts">
                            <h2>Transactions</h2>

                            <Link to={'/transactions'}>
                                View All
                                <Icon icon="material-symbols-light:play-arrow-rounded" width="24" height="24" />
                            </Link>
                        </div>

                        <div className="transactionList">
                            {
                                user?.data.transactions.slice(0, 5).map((item, index) => <TransactionDetail key={index} transaction={item} />)
                            }
                        </div>
                    </div>

                    <div className="bills">
                        <div className="texts">
                            <h2>Recurring Bills</h2>

                            <Link to={'/bills'}>
                                See Details
                                <Icon icon="material-symbols-light:play-arrow-rounded" width="24" height="24" />
                            </Link>
                        </div>

                        <div className="billsList">
                            <div className="billCard">
                                <p>Paid Bills</p>

                                <span>${user?.data.bills.paidBills}</span>
                            </div>
                            
                            <div className="billCard">
                                <p>Total Upocoming</p>

                                <span>${user?.data.bills.totalUpcoming}</span>
                            </div>

                            <div className="billCard">
                                <p>Due Soon</p>

                                <span>${user?.data.bills.dueSoon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}