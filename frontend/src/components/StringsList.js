import ListGroup from "react-bootstrap/ListGroup";

export default function StringsList({ strings }) {
  return (
    <ListGroup className="mt-5 w-50" as="ol" numbered>
      {strings.map((string) => {
        return (
          <ListGroup.Item
            key={string.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto text-break">
              <div className="fw-bold">{string.output}</div>
              Input: {string.input}
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
