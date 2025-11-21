import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import StatCard from "../components/StatCard";
import TransactionItem from "../components/TransactionItem";

export default function App() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* All UI sections will be added here */}
        {/* Header */}
        <View className="bg-white px-6 pt-14 pb-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-cyan-400 rounded-full items-center justify-center mr-2">
                <View className="w-4 h-4 bg-white rounded-full" />
              </View>
              <Text className="text-lg font-semibold text-gray-900">
                MONFLOW
              </Text>
            </View>
            <View className="w-10 h-10 bg-orange-300 rounded-lg items-center justify-center">
              <Ionicons name="person" size={20} color="#7c2d12" />
            </View>
          </View>
        </View>

        {/* Balance Section */}
        <View className="bg-white px-6 pb-8">
          <View className="flex-row items-end">
            <Text className="text-5xl font-light text-gray-900"> $ 590.85</Text>
          </View>
          <View className="flex-row items-center justify-between mt-3">
            <Text className="text-gray-600 text-base">Current Balance</Text>
            <Feather name="more-horizontal" size={24} color="#6b7280" />
          </View>
        </View>

        {/* Cards Section */}
        <View className="px-6 py-6">
          <View className="flex-row justify-between">
            <View className="flex-1 mr-3">
              <StatCard
                variant="primary"
                title="Daily Income"
                percentage="32%"
                balanceLabel="My Balance"
                balance="$ 12,920."
              />
            </View>
            <View className="flex-1 ml-3">
              <StatCard
                variant="secondary"
                title="Spending"
                percentage="21%"
                balanceLabel="Spending"
                balance="$ 8,205."
              />
            </View>
          </View>
        </View>

        {/* Transactions History */}
        <View className="bg-white px-6 py-6">
          <Text className="text-gray-900 text-lg font-semibold mb-4">
            Transactions History
          </Text>

          <TransactionItem
            type="income"
            name="From Ali Hassan"
            date="23 Sep 2025 at 02:00 PM"
            amount="25.90"
          />

          <TransactionItem
            type="expense"
            name="To Mohamed Ali"
            date="20 Sep 2025 at 10:00 AM"
            amount="30.24"
          />

          <TransactionItem
            type="income"
            name="From Sara Ali"
            date="18 Sep 2025 at 04:00 PM"
            amount="15.00"
          />

          <View className="mb-0">
            <TransactionItem
              type="expense"
              name="To Omar Ahmed"
              date="15 Sep 2025 at 11:00 AM"
              amount="45.50"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
