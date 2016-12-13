defmodule Proj.PageController do
  use Proj.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
