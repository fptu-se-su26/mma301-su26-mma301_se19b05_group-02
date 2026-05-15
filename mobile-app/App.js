import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.brand}>
          <View style={styles.brandIcon}>
            <Text style={styles.brandIconText}>🎓</Text>
          </View>
          <Text style={styles.brandTitle}>FPT University</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Chào mừng trở lại!</Text>
          <Text style={styles.subtitle}>Đăng nhập để tiếp tục hành trình học tập của bạn.</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Email Sinh viên</Text>
            <TextInput
              placeholder="student@fpt.edu.vn"
              placeholderTextColor="#9ca3af"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#9ca3af"
              style={styles.input}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.linkButton} activeOpacity={0.7}>
            <Text style={styles.linkText}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View style={styles.separatorRow}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>HOẶC</Text>
            <View style={styles.separatorLine} />
          </View>

          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <Text style={styles.secondaryButtonText}>Đăng nhập bằng Google</Text>
          </TouchableOpacity>

          <View style={styles.noticeBox}>
            <Text style={styles.noticeTitle}>Thông báo mới</Text>
            <Text style={styles.noticeText}>
              Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email để biết thêm chi tiết.
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  container: {
    padding: 24,
  },
  brand: {
    alignItems: 'center',
    marginBottom: 24,
  },
  brandIcon: {
    width: 68,
    height: 68,
    borderRadius: 18,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  brandIconText: {
    fontSize: 32,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 24,
    lineHeight: 22,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#f9fafb',
  },
  linkButton: {
    alignSelf: 'flex-end',
    marginBottom: 18,
  },
  linkText: {
    color: '#7c3aed',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#f97316',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 18,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  separatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 18,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  separatorText: {
    color: '#6b7280',
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  secondaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  noticeBox: {
    backgroundColor: '#f8fafc',
    borderRadius: 18,
    padding: 16,
  },
  noticeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  noticeText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});
