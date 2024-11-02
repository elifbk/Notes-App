import { Container } from "react-bootstrap";
import Form from "../components/Form";
import { NoteData, Tag } from "../types";

export type CreateProps = {
  handleSubmit: (noteData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

// partial : generic olarak bir nesne tip alır ve tipin bütün özelliklerini opsiyonel yapar

const Create = ({ handleSubmit, createTag, availableTags }: CreateProps) => {
  return (
    <Container className="py-5">
      <h2>Yeni Not Oluştur</h2>

      <Form
        createTag={createTag}
        handleSubmit={handleSubmit}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default Create;
