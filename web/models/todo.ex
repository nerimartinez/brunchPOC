defmodule Proj.Todo do
  use Proj.Web, :model

  schema "todos" do
    field :title, :string
    field :is_checked, :boolean, default: false

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :is_checked])
    |> validate_required([:title, :is_checked])
  end
end
