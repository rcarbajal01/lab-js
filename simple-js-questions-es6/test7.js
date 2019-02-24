// 1. What functionality is this class trying to achieve?
// 2. Is there any redundant code? Suggest some improvements in the code of this class.

class Mystery {

    add(event) {
        const { input, value } = event;

        if (!this.keywordExists(value) && (value || '').trim()) {
            this.keywords.push({ value: value.trim() });
        }

        if (input) {
            input.value = '';
        }
    }

    keywordExists(value) {
        let entryExists = false;
        for (const entry of this.keywords) {
            if (entry.value === value) {
                entryExists = true;
            }
        }
        return entryExists;
    }

    remove(target) {
        const index = this.keywords.indexOf(target);

        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
    }

}
