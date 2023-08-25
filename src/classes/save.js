class Save {
  static checkAvailability() {
    if ((typeof Storage) === undefined | null) {
      throw new Error('Storage API is not supported');
    }
    return true;
  }

  static save({
    key,
    item
  }) {
    if (this.checkAvailability()) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  static load({
    key
  }) {
    if (this.checkAvailability()) {
      localStorage.getItem(key);
    }
  }

  static remove({
    key
  }) {
    if (this.checkAvailability()) {
      localStorage.removeItem(key);
    }
  }
}
