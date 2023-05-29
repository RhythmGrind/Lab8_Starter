// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

describe('isPhoneNumber()', () => {
    it('should return true for a valid phone number', () => {
      expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });
    it('should return true for a valid phone number', () => {
        expect(functions.isPhoneNumber('134-456-7890')).toBe(true);
    });  
    it('should return false for an invalid phone number', () => {
      expect(functions.isPhoneNumber('1234567890')).toBe(false);
    });
  
    it('should return false for an invalid phone number', () => {
      expect(functions.isPhoneNumber('123-456-789')).toBe(false);
    });
  });

  describe('isEmail()', () => {
    it('should return true for a valid email address', () => {
      expect(functions.isEmail('johndoe@example.com')).toBe(true);
    });
    it('should return true for a valid email address', () => {
        expect(functions.isEmail('2@a.co')).toBe(true);
    });
    it('should return false for an invalid email address without domain', () => {
      expect(functions.isEmail('johndoe@example')).toBe(false);
    });
  
    it('should return false for an email address with no @ symbol', () => {
      expect(functions.isEmail('johndoeexample.com')).toBe(false);
    });
  });

  describe('isStrongPassword()', () => {
    it('should return true for a strong password', () => {
      expect(functions.isStrongPassword('Abc123')).toBe(true);
    });
    it('should return true for a strong password', () => {
        expect(functions.isStrongPassword('Abc123456')).toBe(true);
      });
    it('should return false for a password that is too short', () => {
      expect(functions.isStrongPassword('Abc')).toBe(false);
    });
    it('should return false for a password that does not contain a letter', () => {
      expect(functions.isStrongPassword('1234567890')).toBe(false);
    });
  });

  describe('isDate()', () => {
    it('should return true for a valid date', () => {
      expect(functions.isDate('01/01/1234')).toBe(true);
    });
    it('should return true for a valid date', () => {
        expect(functions.isDate('1/1/1234')).toBe(true);
      });
    it('should return false for an invalid date', () => {
      expect(functions.isDate('2023-02-30')).toBe(false);
    });
  
    it('should return false for a date with an invalid format', () => {
      expect(functions.isDate('20230528')).toBe(false);
    });
  });

  describe('isHexColor()', () => {
    it('should return true for a valid hex color', () => {
      expect(functions.isHexColor('#ffffff')).toBe(true);
    });
    it('should return true for a valid hex color', () => {
        expect(functions.isHexColor('#fff')).toBe(true);
    });
    it('should return false for an invalid hex color', () => {
      expect(functions.isHexColor('#abc123g')).toBe(false);
    });
    it('should return false for a hex color with an invalid length', () => {
      expect(functions.isHexColor('#23')).toBe(false);
    });
  });