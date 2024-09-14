export const handleError = (status) => {
  switch (status) {
    case 400:
      return "Bad Request -- Your request is invalid.";
    case 401:
      return "Unauthorized -- Your API key is wrong.";
    case 403:
      return "Forbidden -- You have reached your daily quota.";
    case 429:
      return "Too Many Requests -- You have made more requests per second than allowed.";
    case 500:
      return "Internal Server Error -- There was a problem with the server. Please try again later.";
    case 503:
      return "Service Unavailable -- We're temporarily offline for maintenance. Please try again later.";
    default:
      return "An unexpected error occurred.";
  }
};
