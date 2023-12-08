import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const YourComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
    { field: 'userId', headerName: 'User ID', width: 120 },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
        

        
      <h1>List of Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <DataGrid
        rows={posts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>UserId: {post.userId}</p>
            </li>
          ))}
        </ul> */}
        </>
      )}
      <DepartmentList/>
    </div>
  );
};

export default YourComponent;

     

