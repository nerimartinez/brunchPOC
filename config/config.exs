# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :proj,
  ecto_repos: [Proj.Repo]

# Configures the endpoint
config :proj, Proj.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "gLnINn326HQ1GgxDdBMvOMO6nHVmiwTJYHleGa2gN1hg3vFlJtGQomGVyJlVs4CF",
  render_errors: [view: Proj.ErrorView, accepts: ~w(json)],
  pubsub: [name: Proj.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
