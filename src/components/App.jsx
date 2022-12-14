
import css from './App.module.css';

import { Profile } from 'components/Profile/Profile';
import user from './Profile/user'

import { Statistics } from 'components/Statistics/Statistics';
import data from './Statistics/data'

import { FriendList } from 'components/FriendList/FriendList'
import friends from './FriendList/friends'

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions'

console.log(transactions)

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />  
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
};
