# honkit-plugin-admonition

This Honkit plugin can insert admonition block.

## Usage

Install this plugin.

```shell
$ npm install -D https://github.com/chick-p/honkit-plugin-admonition.git
```

Add to your `book.json` plugin list:

```json
{
  "plugins": [
    "admonition@git+https://github.com/chick-p/honkit-plugin-admonition.git"
  ]
}
```

## How to use it

For example:

```markdown
{% admonition type="notes", className="fa fa-book" %}
This is a **pen**.
{% endadmonition %}
```

You can use markdown syntax in a block.

Your book is exported as follows:

```html
<div class="plugin-admonition plugin-admonition--notes">
  <div class="plugin-admonition-title plugin-admonition-title--notes">
    <i class="fa fa-book"></i>
  </div>
  <div class="plugin-admonition-content plugin-admonition-content--notes">
    <p>This is a <strong>pen</strong>.</p>
  </div>
</div>
```
