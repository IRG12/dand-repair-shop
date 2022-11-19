import NewNoteForm from "./NewNoteForm";
import { useGetUsersQuery } from "../users/usersApiSlice";
import { PulseLoader } from "react-spinners";
// selectAllUsers --> is a memoized query --> always privides an array --> if (!users?.length) checks if that array has length
const NewNote = () => {
  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  // old code was not working --> const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>; --> need to check for "length". "users" is returning an array
  if (!users?.length) return <PulseLoader color="#FFF" />;

  const content = <NewNoteForm users={users} />;

  return content;
};

export default NewNote;
