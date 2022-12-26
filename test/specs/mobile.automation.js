describe("Open Application", () => {
  it("should open Hello World Activity", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click();
    await $("//android.widget.TextView[@content-desc='Activity']").click();
    await $("//android.widget.TextView[@content-desc='Hello World']").click();
    await expect(
      $(
        "///android.widget.TextView[@content-desc='Hello World']"
      ).toHaveAttribute("text", "Hello World")
    );
  });
});
