import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiRequest, withAuthHeader } from "../../utils/api";

const MessagesAdminPage = () => {
  const { token } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("/admin/messages", {
        headers: withAuthHeader(token),
      });
      setMessages(response.messages || []);
      setError("");
    } catch (fetchError) {
      setError(fetchError.message || "Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="admin-spinner-container">
        <div className="admin-spinner"></div>
        <p className="admin-spinner-text">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Messages</h2>
          <p className="text-gray-600 text-sm">Messages sent from your website contact form.</p>
        </div>
        <button
          onClick={fetchMessages}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 hover:border-brand-300 transition-all duration-200 shadow-theme-xs hover:shadow-theme-sm"
        >
          <i className="bi bi-arrow-clockwise"></i>
          Refresh
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-xl border border-error-200 bg-error-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-error-100 text-error-700 flex items-center justify-center">
              <i className="bi bi-exclamation-triangle text-lg"></i>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-error-900">Error</h3>
              <p className="text-sm text-error-700 mt-0.5">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!messages.length && !error && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-theme-sm p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center">
            <i className="bi bi-inbox text-3xl"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
          <p className="text-sm text-gray-600 max-w-sm mx-auto">
            Messages from your contact form will appear here once visitors start sending them.
          </p>
        </div>
      )}

      {/* Messages Table */}
      {messages.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-theme-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">#</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Name</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Message</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Date</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <a href={`mailto:${item.email}`} className="hover:text-brand-600 transition-colors">
                        {item.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 max-w-md">
                      <p className="line-clamp-2">{item.message}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesAdminPage;
