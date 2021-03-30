# honkit-plugin-admonition

This Honkit plugin can insert admonition block.

## Usage

Add to your `book.json` plugin list:

```json
{
  "plugins": [
    "admonition@git+https://github.com/chick-p/honkit-plugin-admonition.git#0.1.0"
  ]
}
```

## How to use it

For example:

```markdown
{% admonition type="notes" %}
This is a **pen**.
{% endadmonition %}
```

You can use markdown syntax in a block.

Your book is exported as follows:

```html
<div class="plugin-admonition plugin-admonition--notes">
  <p>This is a <strong>pen</strong>.</p>
</div>
```
