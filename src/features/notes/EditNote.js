import { useParams } from "react-router-dom";
import EditNoteForm from "./EditNoteForm";

import { useGetNotesQuery } from "./notesApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import { PulseLoader } from "react-spinners";

const EditNote = () => {
  const { id } = useParams();

  const { username, isManager, isAdmin } = useAuth();

  const { note } = useGetNotesQuery("notesList", {
    selectFromResult: ({ data }) => ({
      note: data?.entities[id],
    }),
  });

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  // trying to prevent the possibility of an employee inputting "note 'id' into the 'url' " and gaining access where the employee is not supposed to get
  if (!note || !users?.length) return <PulseLoader color="#FFF" />;

  // trying to prevent the possibility of an employee inputting "note 'id' into the 'url' " and gaining access where the employee is not supposed to get
  if (!isManager && !isAdmin) {
    if (note.username !== username) {
      return <p className="errmsg">No access</p>;
    }
  }

  const content = <EditNoteForm note={note} users={users} />;

  return content;
};
export default EditNote;
