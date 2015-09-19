defmodule Phoepack.PageController do
  use Phoepack.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
