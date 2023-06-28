import json, yaml

def load_json(path):
  with open(path) as file:
    return json.load(file)

def load_yaml(path):
  with open(path) as file:
    return yaml.load(file, Loader=yaml.FullLoader)

def on_env(env, **kwargs):
  env.globals["load_json"] = load_json
  env.globals["load_yaml"] = load_yaml
