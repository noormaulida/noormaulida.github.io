import requests
import htmlmin
version = "v2"
f = open("assets/" + version + "/css/style.css", "r")
css_text = f.read()
f.close()
r = requests.post("https://www.toptal.com/developers/cssminifier/api/raw", data={"input":css_text})
css_minified = r.text
f2 = open("assets/" + version + "/css/style.min.css", "w")
f2.write(css_minified)
f2.close()

js = open("assets/" + version + "/js/main.js", "r")
js_text = js.read()
js.close()
jsr = requests.post("https://www.toptal.com/developers/javascript-minifier/api/raw", data={"input":js_text})
js_minified = jsr.text
js2 = open("assets/" + version + "/js/main.min.js", "w")
js2.write(js_minified)
js2.close()

html = open(version + "-index.uncompressed.html", "r")
html_text = html.read()
html.close()
html_minified = htmlmin.minify(html_text)
html2 = open("index.html", "w")
html2.write(html_minified)
html2.close()

project_html = open(version + "-projects.uncompressed.html", "r")
project_html_text = project_html.read()
project_html.close()
project_html_minified = htmlmin.minify(project_html_text)
project_html2 = open("projects.html", "w")
project_html2.write(project_html_minified)
project_html2.close()