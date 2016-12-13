defmodule Proj.Repo.Migrations.CreateTodo do
  use Ecto.Migration

  def change do
    create table(:todos) do
      add :title, :string
      add :is_checked, :boolean, default: false, null: false

      timestamps()
    end

  end
end
