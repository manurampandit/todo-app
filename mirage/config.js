export default function() {
  this.get("todos", schema => {
    return schema.todos.all();
  });

  this.post("todos", (schema, { requestBody }) => {
    requestBody = JSON.parse(requestBody);
    return schema.db.todos.insert(requestBody);
  });
}
