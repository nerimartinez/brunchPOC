defmodule Proj.TodoView do
  use Proj.Web, :view

  def render("index.json", %{todos: todos}) do
    %{data: render_many(todos, Proj.TodoView, "todo.json")}
  end

  def render("show.json", %{todo: todo}) do
    %{data: render_one(todo, Proj.TodoView, "todo.json")}
  end

  def render("todo.json", %{todo: todo}) do
    %{id: todo.id,
      title: todo.title,
      is_checked: todo.is_checked}
  end
end
