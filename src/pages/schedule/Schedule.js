import "./Schedule.css";
import { DataGrid } from '@material-ui/data-grid';
import { Delete } from '@material-ui/icons';

export default function Schedule() {

  const columns = [
    {
      field: 'posts',
      headerName: 'Posts',
      width: 465,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userpost">
            <img className="userpostimg" src={params.row.avatar} alt="" />
            {params.row.posts}
          </div>
        )
      },
    },
    {
      field: 'postdated',
      headerName: 'Scheduled',
      width: 495,
      editable: true,
    },
    {
      field: 'action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Delete className="scheduleDelete" />
          </>
        )
      }
    },
  
  ];
  
  const rows = [
    { id: 1, avatar: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",  posts: 'YOLO', postdated: 'November 11, 2021' },
    { id: 2, avatar: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=", posts: 'Adding Images to featured Posts', postdated: 'April 3, 2021' },
    { id: 3, avatar: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=", posts: 'Payment not going through', postdated: 'January 4, 2021' },
    { id: 4, avatar: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=", posts: 'Coding is really paying off', postdated: 'October 7, 2021' },
    { id: 5, avatar: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=", posts: 'How do I change my password', postdated: 'May 19, 2021' },
  ];
    return (
    <div className="title">
      <h2><b>All Schedules</b></h2>
      <div className="schedule">
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        />
      </div>
    </div>
    );
}
