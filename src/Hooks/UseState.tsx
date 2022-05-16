import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './style.module.css';
/**
 * - Type inference
 * - Initial value null
 * - Type casting
 */

interface Person {
  id: number;
  name: string;
}

interface InfoResponse {
  page: number;
  results: number;
  seed: string;
  version: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface User {
  cell: string;
  phone: string;
  email: string;
  gender: string;
  name: Name;
  location: Location;
  picture: Picture;
}

interface UserResponse {
  results: User[];
  info: InfoResponse;
}

type UserProps = Pick<
  User,
  'cell' | 'phone' | 'email' | 'gender' | 'location' | 'name' | 'picture'
>;

function User(props: UserProps) {
  return (
    <div className={style.card}>
      <img className={style.avatar} src={props.picture.large} alt="" />
      <h3>
        {props.name.title} {props.name.first} {props.name.last}
      </h3>
      <p>{props.email}</p>
      <p>{props.gender}</p>
      <p>{props.cell}</p>
      <p>
        {props.location.city}, {props.location.state} {props.location.country}
      </p>
    </div>
  );
}

export default function UseState() {
  const [name, setName] = useState('');
  const [person, setPerson] = useState({} as Person);
  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUser = async () => {
    const userResponse: UserResponse = await fetch(
      'https://randomuser.me/api?results=4'
    ).then((data) => data.json());
    setUsers(userResponse.results);
  };
  useEffect(() => {
    setPerson({
      id: 1,
      name: 'John Doe',
    });

    fetchUser();
  }, []);

  return (
    <div className={style.verticalFlex}>
      <Button className={style.fetch} onClick={() => fetchUser()}>
        Random Fetch
      </Button>
      <div className={style.grid}>
        {users &&
          users.map(
            ({ cell, phone, location, email, gender, name, picture }) => (
              <User
                key={name.first}
                cell={cell}
                phone={phone}
                location={location}
                email={email}
                gender={gender}
                name={name}
                picture={picture}
              />
            )
          )}
      </div>
    </div>
  );
}
