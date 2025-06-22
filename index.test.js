import path from "node:path";
import { expect, test } from "vitest";

import tester from "honkit-tester";

const markdownContent = `{% admonition type="notes", iconClassName="fa fa-book", subtitle="This is subtitle" %}
This is a **pen**.
{% endadmonition %}`;

const htmlContent = `<p>
          </p><div class="plugin-admonition plugin-admonition--notes">
            <div class="plugin-admonition-title plugin-admonition-title--notes">
              <i class="fa fa-book"></i>
            </div>
            <div class="plugin-admonition-content plugin-admonition-content--notes">
              <div class="plugin-admonition-subtitle">This is subtitle</div>
              <p>This is a <strong>pen</strong>.</p>

            </div>
          </div>
        <p></p>`;

test("Generate admonition", async () => {
  const result = await tester
    .builder()
    .withContent(markdownContent)
    .withLocalPlugin(path.join(__dirname, "."))
    .withBookJson({
      title: "Test Book",
      plugins: ["admonition"],
    })
    .create();
  const content = result.get("index.html").content;
  expect(content).toEqual(htmlContent);
});
