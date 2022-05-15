import React from 'react';
import style from './style.module.css';
/**
 * Props
 *  - required/optional
 *  - primitives
 *  - collections
 *  - unions
 *  - discriminated unions
 *  - children
 *  - component as a prop
 */

function isPremiumUserProps(user: UserProps): user is PremiumUserProps {
  return user.type === 'paid';
}

function User(props: UserProps) {
  return (
    <div className={style.user} style={props.style}>
      {props.children}
      <h3>{props.name}</h3>
      <p>id: {props.id}</p>
      {props.address && (
        <>
          <p>city: {props.address.city}</p>
          <p>country: {props.address.country}</p>
        </>
      )}
      {isPremiumUserProps(props) && (
        <>
          <p>subscription: {props.subscription}</p>
          <p>plan: {props.plan}</p>
          <p>features: {props.features.join(', ')}</p>
        </>
      )}
      {!isPremiumUserProps(props) && (
        <>
          <p>Free trial ends in: {props.trialPeriodEndsInDays} day(s)</p>
        </>
      )}
    </div>
  );
}

export default function ComponentProps() {
  return (
    <div className={style.content}>
      <User
        id={1}
        name="John Cheapo"
        trialPeriodEndsInDays={10}
        type="free"
        style={{
          borderBottom: '6px solid skyblue',
        }}
      >
        <h1>Free User</h1>
      </User>
      <User
        id={1}
        name="Bob Smith"
        subscription={1000}
        plan="Golden"
        features={['4k', 'UHD', 'Multi-device streaming']}
        type="paid"
        style={{
          borderBottom: '6px solid tomato',
        }}
      >
        <h1>Premium User</h1>
      </User>
    </div>
  );
}
