import { useSelector } from "react-redux";
import { myAllPost } from "./postsSlice";
// material
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const PostList = () => {
  const posts = useSelector(myAllPost);

  return <section>
    <h2>Posts</h2>
    <TableContainer component={Paper}>
        <Table sx={{ minWidTableCell: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>content</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    posts.map(po=>
                           
                        <TableRow key={po.id}>
                            <TableCell>{po.id}</TableCell>
                            <TableCell>{po.title}</TableCell>
                            <TableCell>{po.content}</TableCell>
                        </TableRow>
                    
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
  </section>;
};

export default PostList;
