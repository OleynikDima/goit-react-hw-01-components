import React from 'react';
import Section from './Section';

//Profile 
import Profile from './social-profile/Profile';
import user from './social-profile/user.json';

//Statistics
import Statistics from './statistics/Statistics';
import statistics from './statistics/statistical-data.json'

//Friend liset
import FriendList from './friend-list/FriendList';
import friends from './friend-list/frieds.json';

//Transaction History
import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json';

//Profile,FriendsList,Statistics,TransactionHistory - это наш шаблоны, to do temp 
//Подключаем json инфа,


export default function App(){
    return (
        
        <>
        <Section title="Profile">
            <Profile user={user}
            />
         </Section>
        
         <Section title="Statistic">
             <Statistics 
             statistics={statistics}/> 
         </Section>

         <Section title="FriedsList">
            <FriendList friends={friends}/>
         </Section>

         <Section title="TransactionHistory">
             <TransactionHistory 
             transactions={transactions}/>
             </Section>
         </>
    )
}