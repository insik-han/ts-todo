import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const ApiTestWrapper = styled.div`
  width: 1024px;
  height: 100vh;
  margin: 0 auto;
  background-color: skyblue;
  box-sizing: border-box;
  border-radius: 50px;
  text-align: center;
  padding: 50px;
`;

const ApiTest = ({ data, error }: { data: any; error: any }) => {
  const router = useRouter();
  return (
    <ApiTestWrapper>
      <div className="api-inner">
        <a onClick={() => router.back()}>돌아가기</a>
        {!error && data && (
          <ul>
            {data.map((user: any, key: any) => (
              <li key={key}>
                {user.username} ({user.name})
              </li>
            ))}
          </ul>
        )}
      </div>
    </ApiTestWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchData = async () =>
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => ({
        error: false,
        data: res.data,
      }))
      .catch(() => ({
        error: true,
        data: null,
      }));
  const result = await fetchData();
  return {
    props: result,
  };
};

export default ApiTest;
